/*
 * Copyright 2021 The Backstage Authors
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

import { PullRequestGridColumn } from '../PullRequestGridColumn';
import { PullRequestGroup } from '../types';
import { styled } from '@material-ui/core/styles';

const GridDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '& > *': {
    marginRight: theme.spacing(2),
  },
  '& > :last-of-type': {
    marginRight: 0,
  },
}));

type PullRequestGridProps = {
  pullRequestGroups: PullRequestGroup[];
};

export const PullRequestGrid = ({
  pullRequestGroups,
}: PullRequestGridProps) => {
  return (
    <GridDiv>
      {pullRequestGroups.map((pullRequestGroup, index) => (
        <PullRequestGridColumn
          key={index}
          pullRequestGroup={pullRequestGroup}
        />
      ))}
    </GridDiv>
  );
};
