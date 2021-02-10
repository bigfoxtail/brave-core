/* This Source Code Form is subject to the terms of the Mozilla Public
 * License,
 * v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { StatsContainer, StatsItem } from './stats'
export * from './settings'
import { ListWidget, Tile, TileActionsContainer, TileAction, TileFavicon } from './gridSites'
import { SiteRemovalNotification, SiteRemovalText, SiteRemovalAction } from './notification'
import { ClockWidget } from './clock'
<<<<<<< HEAD
import { RewardsWidget } from './rewards'
import { BinanceWidget } from './binance'
import { TogetherWidget } from './together'
import { GeminiWidget } from './gemini'
import { CryptoDotComWidget } from './cryptoDotCom'
import EditCards from './editCards'
=======
//import { RewardsWidget } from './rewards'
//import { BinanceWidget } from './binance'
//import { TogetherWidget } from './together'
//import { GeminiWidget } from './gemini'
//import { CryptoDotComWidget } from './cryptoDotCom'
//import EditCards from './editCards'
>>>>>>> brave1.21.49
import createWidget from './widget'

export * from './page'

export {
  StatsContainer,
  StatsItem,
  ListWidget,
  Tile,
  TileActionsContainer,
  TileAction,
  TileFavicon,
  SiteRemovalNotification,
  SiteRemovalText,
  SiteRemovalAction,
  ClockWidget,
<<<<<<< HEAD
  RewardsWidget,
  BinanceWidget,
  TogetherWidget,
  EditCards,
  GeminiWidget,
  CryptoDotComWidget,
=======
//  RewardsWidget,
//  BinanceWidget,
//  TogetherWidget,
//  EditCards,
//  GeminiWidget,
//  CryptoDotComWidget,
>>>>>>> brave1.21.49
  createWidget
}
