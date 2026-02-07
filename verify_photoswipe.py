from playwright.sync_api import sync_playwright
import time
import sys

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Enable console logging
        context = browser.new_context()
        page = context.new_page()

        page.on("console", lambda msg: print(f"Browser Console: {msg.text}"))

        try:
            print("Navigating to http://localhost:3000/test-ril...")
            page.goto("http://localhost:3000/test-ril")

            # Wait for images to load
            print("Waiting for images...")
            page.wait_for_selector("main img", timeout=10000)
            print("Images found.")

            # Find images
            images = page.query_selector_all("main img")
            print(f"Found {len(images)} images in main.")

            if len(images) == 0:
                print("No images found! Verification failed.")
                return False

            # Check positions
            for i, img in enumerate(images):
                box = img.bounding_box()
                style = img.get_attribute("style") or ""
                classes = img.get_attribute("class") or ""
                print(f"Image {i}: Src={img.get_attribute('src')}, Box: {box}, Style: {style}, Class: {classes}")

            # Click the first image
            print("Attempting to click the first image...")
            # Force click if needed or scroll
            images[0].scroll_into_view_if_needed()
            # Check if covered
            is_visible = images[0].is_visible()
            print(f"Image 0 visible: {is_visible}")

            try:
                images[0].click(timeout=5000)
                print("Click successful.")
            except Exception as e:
                print(f"Click failed: {e}")
                # Try clicking via JS as fallback to see if it triggers
                # page.evaluate("arguments[0].click()", images[0])

            # Wait for Photoswipe
            print("Waiting for pswp element...")
            try:
                page.wait_for_selector(".pswp", state="visible", timeout=5000)
                print("Photoswipe modal is visible!")

                # Take screenshot of open modal
                page.screenshot(path="verification_modal.png")
                print("Screenshot saved to verification_modal.png")
                return True
            except Exception as e:
                print(f"Photoswipe not visible: {e}")
                page.screenshot(path="verification_failed_click.png")
                return False

        except Exception as e:
            print(f"An error occurred: {e}")
            page.screenshot(path="verification_error.png")
            return False
        finally:
            browser.close()

if __name__ == "__main__":
    if verify():
        print("Verification Passed")
        sys.exit(0)
    else:
        print("Verification Failed")
        sys.exit(1)
