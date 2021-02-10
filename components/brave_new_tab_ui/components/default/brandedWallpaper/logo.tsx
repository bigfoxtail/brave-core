// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

import * as React from 'react'
import {
  Link,
  PhotoName
} from '../../default'
import * as S from '../../default/page'
import { getLocale } from '../../../../common/locale'

import createWidget from '../widget/index'
//import * as Styled from './logo-style'

interface Props {
  data: NewTab.BrandedWallpaperLogo
  onClickLogo: () => void
}

function Logo ({ data, onClickLogo }: Props) {
  return (
    <>
          <S.GridItemCredits>
            <PhotoName>
              {`${getLocale('photoBy')} `}
              <Link href={data.destinationUrl} rel='noreferrer noopener' target='_blank'>
                {data.alt}
              </Link>
            </PhotoName>
          </S.GridItemCredits>
    </>
  )
}

export default createWidget(Logo)
