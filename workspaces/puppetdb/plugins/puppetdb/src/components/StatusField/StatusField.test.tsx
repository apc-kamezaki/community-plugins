/*
 * Copyright 2020 The Backstage Authors
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
import { StatusField } from './StatusField';
import { renderInTestApp } from '@backstage/test-utils';

describe('StatusField', () => {
  it('should render failed', async () => {
    const render = await renderInTestApp(<StatusField status="failed" />);
    expect(render.getByText('FAILED')).toBeInTheDocument();
    expect(
      render.container.querySelector('span[aria-label="Status error"]'),
    ).toBeInTheDocument();
  });

  it('should render changed', async () => {
    const render = await renderInTestApp(<StatusField status="changed" />);
    expect(render.getByText('CHANGED')).toBeInTheDocument();
    expect(
      render.container.querySelector('span[aria-label="Status running"]'),
    ).toBeInTheDocument();
  });

  it('should render unchanged', async () => {
    const render = await renderInTestApp(<StatusField status="unchanged" />);
    expect(render.getByText('UNCHANGED')).toBeInTheDocument();
    expect(
      render.container.querySelector('span[aria-label="Status pending"]'),
    ).toBeInTheDocument();
  });

  it('should render default', async () => {
    const render = await renderInTestApp(<StatusField status="successful" />);
    expect(render.getByText('SUCCESSFUL')).toBeInTheDocument();
    expect(
      render.container.querySelector('span[aria-label="Status ok"]'),
    ).toBeInTheDocument();
  });
});
