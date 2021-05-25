(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[7534],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(a),u=r,d=h["".concat(i,".").concat(u)]||h[u]||m[u]||o;return a?n.createElement(d,s(s({ref:t},p),{},{components:a})):n.createElement(d,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7142:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return p}});var n=a(9603),r=a(120),o=(a(7378),a(5318)),s={id:"remote-schemas",title:"Remote schemas",description:"Generate GraphQL schema objects that delegate to a remote server"},c={unversionedId:"remote-schemas",id:"remote-schemas",isDocsHomePage:!1,title:"Remote schemas",description:"Generate GraphQL schema objects that delegate to a remote server",source:"@site/docs/remote-schemas.md",sourceDirName:".",slug:"/remote-schemas",permalink:"/docs/remote-schemas",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/remote-schemas.md",version:"current",frontMatter:{id:"remote-schemas",title:"Remote schemas",description:"Generate GraphQL schema objects that delegate to a remote server"},sidebar:"someSidebar",previous:{title:"Schema delegation",permalink:"/docs/schema-delegation"},next:{title:"Schema wrapping",permalink:"/docs/schema-wrapping"}},i=[{value:"Use Loaders to load schemas easily",id:"use-loaders-to-load-schemas-easily",children:[]},{value:"Create a remote executable schema with custom executor and subscriber methods",id:"create-a-remote-executable-schema-with-custom-executor-and-subscriber-methods",children:[{value:"Creating an executor",id:"creating-an-executor",children:[]},{value:"Using cross-fetch",id:"using-cross-fetch",children:[]},{value:"Creating a subscriber",id:"creating-a-subscriber",children:[]}]},{value:"API",id:"api",children:[{value:"introspectSchema(executor, context)",id:"introspectschemaexecutor-context",children:[]},{value:"wrapSchema(schemaConfig)",id:"wrapschemaschemaconfig",children:[]},{value:"makeRemoteExecutableSchema(options)",id:"makeremoteexecutableschemaoptions",children:[]}]}],l={toc:i};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It can be valuable to be able to treat remote GraphQL endpoints as if they were local executable schemas. This is especially useful for ",(0,o.kt)("a",{parentName:"p",href:"/docs/stitch-api/"},"schema stitching"),", but there may be other use cases."),(0,o.kt)("p",null,"There two ways to create remote schemas;"),(0,o.kt)("h2",{id:"use-loaders-to-load-schemas-easily"},"Use Loaders to load schemas easily"),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema-loading"},"Schema Loading")," to load schemas from an URL and/or different sources easily without implementing an executor or subscriber."),(0,o.kt)("h2",{id:"create-a-remote-executable-schema-with-custom-executor-and-subscriber-methods"},"Create a remote executable schema with custom executor and subscriber methods"),(0,o.kt)("p",null,"Generally, to create a remote schema, you generally need just three steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"#creating-an-executor"},"executor")," that can retrieve results from that schema"),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("a",{parentName:"li",href:"#introspectschemaexecutor-context"},(0,o.kt)("inlineCode",{parentName:"a"},"introspectSchema"))," to get the non-executable schema of the remote server"),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("a",{parentName:"li",href:"#wrapschemaschemaconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"wrapSchema"))," to create a schema that uses the executor to delegate requests to the underlying service")),(0,o.kt)("p",null,"You can optionally also include a ",(0,o.kt)("a",{parentName:"p",href:"#creating-a-subscriber"},"subscriber")," that can retrieve real time subscription results from the remote schema (only if you are using GraphQL Subscriptions)"),(0,o.kt)("h3",{id:"creating-an-executor"},"Creating an executor"),(0,o.kt)("p",null,"You can use an executor with an HTTP Client implementation (like cross-fetch). An executor is a function capable of retrieving GraphQL results. It is the same way that a GraphQL Client handles fetching data and is used by several ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-tools")," features to do introspection or fetch results during execution."),(0,o.kt)("p",null,"We've chosen to split this functionality up to give you the flexibility to choose when to do the introspection step. For example, you might already have the remote schema information, allowing you to skip the ",(0,o.kt)("inlineCode",{parentName:"p"},"introspectSchema")," step entirely. Here's a complete example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type Executor = (operation: ExecutionParams) => Promise<ExecutionResult>;\n\ntype ExecutionParams = {\n  document: DocumentNode,\n  variables?: Object,\n  context?: Object,\n  info?: GraphQLResolveInfo,\n};\n")),(0,o.kt)("h3",{id:"using-cross-fetch"},"Using cross-fetch"),(0,o.kt)("p",null,"Basic usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { fetch } from 'cross-fetch';\nimport { print } from 'graphql';\nimport { introspectSchema, wrapSchema } from '@graphql-tools/wrap';\n\nconst executor = async ({ document, variables }) => {\n  const query = print(document);\n  const fetchResult = await fetch('http://example.com/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ query, variables }),\n  });\n  return fetchResult.json();\n};\n\nexport default async () => {\n  const schema = wrapSchema({\n    schema: await introspectSchema(executor),\n    executor,\n  });\n  return schema;\n};\n")),(0,o.kt)("p",null,"Authentication headers from context"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { fetch } from 'cross-fetch';\nimport { print } from 'graphql';\nimport { introspectSchema, wrapSchema } from '@graphql-tools/wrap';\n\nconst executor = async ({ document, variables, context }) => {\n  const query = print(document);\n  const fetchResult = await fetch('http://example.com/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      Authorization: `Bearer ${context.authKey}`,\n    },\n    body: JSON.stringify({ query, variables }),\n  });\n  return fetchResult.json();\n};\n\nexport default async () => {\n  const schema = wrapSchema({\n    schema: await introspectSchema(executor),\n    executor,\n  });\n\n  return schema;\n};\n")),(0,o.kt)("h3",{id:"creating-a-subscriber"},"Creating a subscriber"),(0,o.kt)("p",null,"For subscriptions, we need to define a subscriber that returns ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncIterator"),". Other than that, it has the similar API with ",(0,o.kt)("inlineCode",{parentName:"p"},"executor"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Subscriber = (executionParams: ExecutionParams) => Promise<AsyncIterator<ExecutionResult>>;\n")),(0,o.kt)("h4",{id:"using-graphql-ws"},"Using ",(0,o.kt)("inlineCode",{parentName:"h4"},"graphql-ws")),(0,o.kt)("p",null,"For the following example to work, the server must implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md"},"library's transport protocol"),". Learn more about ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},(0,o.kt)("inlineCode",{parentName:"a"},"graphql-ws")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { wrapSchema, introspectSchema } from '@graphql-tools/wrap';\nimport { Executor, Subscriber } from '@graphql-tools/delegate';\nimport { fetch } from 'cross-fetch';\nimport { print } from 'graphql';\nimport { observableToAsyncIterable } from '@graphql-tools/utils';\nimport { createClient } from 'graphql-ws';\n\nconst HTTP_GRAPHQL_ENDPOINT = 'http://localhost:3000/graphql';\nconst WS_GRAPHQL_ENDPOINT = 'ws://localhost:3000/graphql';\n\nconst executor: Executor = async ({ document, variables }) => {\n  const query = print(document);\n  const fetchResult = await fetch(HTTP_GRAPHQL_ENDPOINT, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ query, variables }),\n  });\n  return fetchResult.json();\n};\n\nconst subscriptionClient = createClient({\n  url: WS_GRAPHQL_ENDPOINT,\n});\n\nconst subscriber: Subscriber = ({ document, variables }) =>\n  observableToAsyncIterable({\n    subscribe: observer => ({\n      unsubscribe: subscriptionClient.subscribe(\n        {\n          query: document,\n          variables,\n        },\n        {\n          next: data => observer.next && observer.next(data),\n          error: err => {\n            if (!observer.error) return;\n            if (err instanceof Error) {\n              observer.error(err);\n            } else if (err instanceof CloseEvent) {\n              observer.error(new Error(`Socket closed with event ${err.code}`));\n            } else {\n              // GraphQLError[]\n              observer.error(new Error(err.map(({ message }) => message).join(', ')));\n            }\n          },\n          complete: () => observer.complete && observer.complete(),\n        }\n      ),\n    }),\n  });\n\nexport default async () => {\n  const schema = wrapSchema({\n    schema: await introspectSchema(executor),\n    executor,\n    subscriber,\n  });\n\n  return schema;\n};\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"introspectschemaexecutor-context"},"introspectSchema(executor, ","[context]",")"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," to obtain a non-executable client schema from a remote schema using a full introspection query. ",(0,o.kt)("inlineCode",{parentName:"p"},"introspectSchema")," is used to acquire the non-executable form of a remote schema that must be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapSchema"),". It returns a promise to a non-executable GraphQL.js schema object. Accepts optional second argument ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),", which is passed to the executor; see the docs about executors above for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { introspectSchema } from '@graphql-tools/wrap';\n\nintrospectSchema(executor).then(schema => {\n  // use the schema\n});\n\n// or, with async/await:\nconst schema = await introspectSchema(executor);\n")),(0,o.kt)("h3",{id:"wrapschemaschemaconfig"},"wrapSchema(schemaConfig)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wrapSchema")," comes most in handy when wrapping a remote schema. When using the function to wrap a remote schema, it takes a single object: an subschema configuration object with properties describing how the schema should be accessed and wrapped. The ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," options are required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { wrapSchema } from '@graphql-tools/wrap';\n\nconst schema = wrapSchema({\n  schema,\n  executor,\n  transforms,\n});\n")),(0,o.kt)("p",null,"Transforms are further described within the ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema-wrapping/"},"general schema wrapping section"),". When using a schema configuration object, transforms should be placed as a property within the configuration, rather than as a separate argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapSchema"),"."),(0,o.kt)("p",null,"Batching and caching can be accomplished by specifying customized executors that manage this for you. We export a ",(0,o.kt)("inlineCode",{parentName:"p"},"linkToExecutor")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"@graphql-tools/links")," package that can be used to transform the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prisma-labs/http-link-dataloader"},(0,o.kt)("inlineCode",{parentName:"a"},"HTTPLinkDataloader"))," Apollo-style link (created by Prisma) that will batch and cache all requests. Per request caching is a simple add-on, as the ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," function is provided the context, so a global ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," specified by wrapSchema can simply forward all arguments to a request-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," provided on the context."),(0,o.kt)("p",null,"For users who need to customize the root proxying resolvers at the time that the wrapping schema is generated, you can also specify a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"createProxyingResolver")," function that will create your own root resolvers for the new outer, wrapping schema. This function has the following signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type CreateProxyingResolverFn = (options: ICreateProxyingResolverOptions) => GraphQLFieldResolver<any, any>;\n\nexport interface ICreateProxyingResolverOptions {\n  subschemaConfig: SubschemaConfig; // target schema config for delegation\n  transformedSchema?: GraphQLSchema; // pre-processed result of applying any transforms to the target schema\n  operation?: Operation; // target operation type = 'query' | 'mutation' | 'subscription'\n  fieldName?: string; // target root field name\n}\n")),(0,o.kt)("p",null,"You may not need all the options to accomplish what you need. For example, the default proxying resolver creator just uses a subset of the passed arguments, with the fieldName inferred:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { delegateToSchema } from '@graphql-tools/delegate';\n\nexport function defaultCreateProxyingResolver({\n  subschemaConfig,\n  operation,\n  transforms,\n  transformedSchema,\n}: ICreateProxyingResolverOptions): GraphQLFieldResolver<any, any> {\n  return (_parent, _args, context, info) =>\n    delegateToSchema({\n      schema: subschemaConfig,\n      operation,\n      context,\n      info,\n      transformedSchema,\n    });\n}\n")),(0,o.kt)("p",null,"Parenthetically, note that that ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," from the root field resolver are not directly passed to the target schema. These arguments have already been parsed into their corresponding internal values by the GraphQL execution algorithm. The correct, serialized form of the arguments are available within the ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," object, ready for proxying. Specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," property for ",(0,o.kt)("inlineCode",{parentName:"p"},"delegateToSchema")," allows one to pass ",(0,o.kt)("em",{parentName:"p"},"additional")," arguments to the target schema, which is not necessary when creating a simple proxying schema."),(0,o.kt)("p",null,"The above can can all be put together like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { wrapSchema } from '@graphql-tools/wrap';\n\nconst schema = wrapSchema({\n  schema,\n  executor: myCustomExecutor,\n  createProxyingResolver: myCustomCreateProxyingResolverFn,\n});\n")),(0,o.kt)("p",null,"Note that within the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultCreateProxyingResolver")," function, ",(0,o.kt)("inlineCode",{parentName:"p"},"delegateToSchema")," receives ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriber")," functions stored on the subschema config object originally passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapSchema"),". As above, use of the the ",(0,o.kt)("inlineCode",{parentName:"p"},"createProxyingResolver")," option is helpful when you want to customize additional functionality at resolver creation time. If you just want to customize how things are proxied at the time that they are proxied, you can make do just with custom executors and subscribers."),(0,o.kt)("h3",{id:"makeremoteexecutableschemaoptions"},"makeRemoteExecutableSchema(options)"),(0,o.kt)("p",null,"What about ",(0,o.kt)("inlineCode",{parentName:"p"},"makeRemoteExecutableSchema"),", the function used in older versions to access remote schemas? It still works -- just now under the hood calling ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapSchema"),". There is essentially no longer any need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"makeRemoteExecutableSchema")," directly, but we've kept it around for backwards compatibility."),(0,o.kt)("p",null,"You can still pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"createResolver")," function to ",(0,o.kt)("inlineCode",{parentName:"p"},"makeRemoteExecutableSchema")," to override how the fetch resolvers are created and executed. The ",(0,o.kt)("inlineCode",{parentName:"p"},"createResolver")," param accepts an ",(0,o.kt)("inlineCode",{parentName:"p"},"Executor")," as its first argument (and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscriber")," as its second) and returns a resolver function. This opens up the possibility for users to create batching mechanisms for fetches. As above, it is likely easier to just customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," function itself."),(0,o.kt)("p",null,"Given a GraphQL.js schema (can be a non-executable client schema made by ",(0,o.kt)("inlineCode",{parentName:"p"},"buildClientSchema"),") and a ",(0,o.kt)("a",{parentName:"p",href:"#creating-an-executor"},"executor"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"makeRemoteExecutableSchema")," produce a GraphQL Schema that routes all requests to the executor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { makeRemoteExecutableSchema } from '@graphql-tools/wrap';\n\nconst createResolver: (executor: Executor) => GraphQLFieldResolver<any, any> = // . . .\n\nconst schema = makeRemoteExecutableSchema({\n  schema,\n  executor,\n  createResolver\n});\n")))}p.isMDXComponent=!0}}]);