## API Report File for "@backstage-community/plugin-graphiql"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiRef } from '@backstage/core-plugin-api';
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { ErrorApi } from '@backstage/core-plugin-api';
import { FetchApi } from '@backstage/core-plugin-api';
import type { GraphiQLPlugin } from '@graphiql/react';
import { JSX as JSX_2 } from 'react';
import { OAuthApi } from '@backstage/core-plugin-api';
import { default as React_2 } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

// @public
export type EndpointConfig = {
  id: string;
  title: string;
  url: string | Promise<string>;
  method?: 'POST';
  headers?: {
    [name in string]: string;
  };
  fetchApi?: FetchApi;
  plugins?: GraphiQLPlugin[];
};

// @public (undocumented)
export type GithubEndpointConfig = {
  id: string;
  title: string;
  url?: string;
  errorApi?: ErrorApi;
  fetchApi?: FetchApi;
  githubAuthApi: OAuthApi;
  plugins?: GraphiQLPlugin[];
};

// @public (undocumented)
export const GraphiQLIcon: (props: SvgIconProps) => React_2.JSX.Element;

// @public (undocumented)
export const GraphiQLPage: () => JSX_2.Element;

// @public (undocumented)
const graphiqlPlugin: BackstagePlugin<{}, {}, {}>;
export { graphiqlPlugin };
export { graphiqlPlugin as plugin };

// @public (undocumented)
export const graphiQLRouteRef: RouteRef<undefined>;

// @public (undocumented)
export type GraphQLBrowseApi = {
  getEndpoints(): Promise<GraphQLEndpoint[]>;
};

// @public (undocumented)
export const graphQlBrowseApiRef: ApiRef<GraphQLBrowseApi>;

// @public (undocumented)
export type GraphQLEndpoint = {
  id: string;
  title: string;
  fetcher: (body: any) => Promise<any>;
  plugins?: GraphiQLPlugin[];
};

// @public (undocumented)
export class GraphQLEndpoints implements GraphQLBrowseApi {
  // (undocumented)
  static create(config: EndpointConfig): GraphQLEndpoint;
  // (undocumented)
  static from(endpoints: GraphQLEndpoint[]): GraphQLEndpoints;
  // (undocumented)
  getEndpoints(): Promise<GraphQLEndpoint[]>;
  static github(config: GithubEndpointConfig): GraphQLEndpoint;
}

// @public (undocumented)
export const Router: () => React_2.JSX.Element;
```
