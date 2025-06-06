/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { style } from 'typestyle';
import { PFColors } from '../components/Pf/PfColors';

export const healthIndicatorStyle = style({
  $nest: {
    '& .pf-v5-c-tooltip__content': {
      borderWidth: '1px',
      textAlign: 'left',
    },

    '& .pf-v5-c-content ul': {
      marginBottom: 'var(--pf-v5-c-content--ul--MarginTop)',
      marginTop: 0,
      color: PFColors.Color100,
    },
  },
});
