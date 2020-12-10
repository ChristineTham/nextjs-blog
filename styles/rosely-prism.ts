/* eslint-disable @typescript-eslint/no-unused-vars */
// @flow
// Duotone Light
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)

import type { PrismTheme } from 'prism-react-renderer'

const rosely0 = '#27272a'
const rosely1 = '#615f5f'
const rosely2 = '#85677b'
const rosely3 = '#a49e9e'
const rosely4 = '#f7caca'
const rosely5 = '#f4dede'
const rosely6 = '#f4eee8'
const rosely7 = '#93a9d1'
const rosely8 = '#be9cc1'
const rosely9 = '#b0879b'
const rosely10 = '#b565a7'
const rosely11 = '#d2386c'
const rosely12 = '#ec809e'
const rosely13 = '#eada4f'
const rosely14 = '#64bfa4'
const rosely15 = '#919bc9'
const jamstack = '#F0047F'

const theme: PrismTheme = {
  plain: {
    backgroundColor: rosely5,
    color: rosely1,
    fontSize: '0.9rem'
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
      style: {
        color: rosely3
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ['tag', 'operator', 'number'],
      style: {
        color: rosely10
      }
    },
    {
      types: ['property', 'function'],
      style: {
        color: rosely2
      }
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: rosely15
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: rosely14
      }
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule'
      ],
      style: {
        color: rosely7
      }
    },
    {
      types: ['placeholder', 'variable'],
      style: {
        color: rosely9
      }
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through'
      }
    },
    {
      types: ['inserted'],
      style: {
        textDecorationLine: 'underline'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['important'],
      style: {
        color: rosely11
      }
    }
  ]
}

export default theme
