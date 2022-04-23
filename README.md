# Full-Stack Challenge - Frontend
A Sample example base on my favourite online publishing platform - Matters

![coverimage](https://i.imgur.com/IWl8T4R.png)
| Header | Description | link
| ------ | ------ | ------ |
| File Structure | File Structure of Repo | [Link](#file-structure) |
| Demo Video | The Demo Video of the project | [Link](#demo-video) |
| Env Reuqirement | Environment Reqirement of Repo | [Link](#env-reuqirementv) |
| Setup | Basic Setup Guildline | [Link](#setup) |
| Choice of Package | The Reason why I choose these package | [Link](#choice-of-package) |
| PrintScreen | PrintScreen of Component | [Link](#printscreen) |

## Demo Video
[Demo Video Link](https://www.youtube.com/watch?v=PosF0yxbizw)

## File Structure
```
.
├── locales
│   ├── en
│   │    └── common.json
│   ├── zh-HK
│   │    └── common.json
│   └── zh-TW
│   │    └── common.json
├── public
├── src
│   ├── apis
│   │    ├── apollo.ts
│   │    └── graphQL.ts
│   ├── components
│   │    ├── createrPageCompontent
│   │    │    ├── centerContainerCompontent
│   │    │    ├── rightContainerCompontent
│   │    │    └── index.tsx
│   │    ├── globalComponent
│   │    │    ├── dialog
│   │    │    ├── header
│   │    │    ├── layout
│   │    │    └── snackBar
│   │    └── homePageCompontent
│   │    │    ├── centerContainerCompontent
│   │    │    ├── leftContainerCompontent
│   │    │    └── rightContainerCompontent
│   ├── pages
│   │    ├── creater
│   │    ├── _app.tsx
│   │    └── index.tsx
│   └── store
│   │    ├── actions
│   │    │    ├── createrPageActions
│   │    │    ├── globalActions/dialogActions
│   │    │    ├── globalActions/loadingActions
│   │    │    ├── globalActions/snackBarActions
│   │    │    ├── globalActions/userActions
│   │    │    └── homePageActions
│   │    ├── reducers
│   │    │    ├── createrPageReducer
│   │    │    ├── globalReducer/dialogReducer
│   │    │    ├── globalReducer/loadingReducer
│   │    │    ├── globalReducer/snackBarReducer
│   │    │    ├── globalReducer/userReducer
│   │    │    └── homePageReducer
│   │    ├── types
│   │    │    ├── createrPageType
│   │    │    ├── globalType/dialogType
│   │    │    ├── globalType/loadingType
│   │    │    ├── globalType/snackBarType
│   │    │    ├── globalType/userType
│   │    │    └── homePageType
│   │    └── index.ts
├── styles
│   ├── base.css
│   ├── components.css
│   └── utilities.css
├── .gitignore
├── README.md
├── i18n.json
├── next.env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
```

## Env Reuqirement
```
node @ 14.0.0 + 
npm @ 7.5.8 +
Typescript @ 4.6.2 +
```

## Setup
```
npm i --save
npm run dev
```

## Choice of Package
---
Typescript - as strong Javascript, Typescript is the best friend of all Frontend Engineer because of its crazy stability (such as die for no reason) with nice maintainability during a large size product (everybody got no freestyle anymore - except you guys use it as Anyscript :D )

NextJS  - A great opensource opinionated framework, with a low learning curve, nice document, and development experience, SEO friendly (SSR + SSG), and excellent performance for large size products (Small Size project please use Gatsby).

TailwindCSS - One of the best atom level "Utility-First CSS" in the world, the lowest learning curve for developer AND designer (Yes, Designer may pick up faster than the developer, they got no reason to say CSS is difficult.), easier to build complex responsive layouts freely and higher productivity (such as responsive design).

Material-UI - One of the best CSS react components to provide simple, customizable, and accessible components (OK I just reference from its official website). The main reason for me to select it is because TailwindCSS won't provide some can component such as Button, Menu, Card and most time no one wants to spend time on that too, so I select Material-UI to handle these repeat works, but of course, we can customize it since TailwindCSS can override their layout.

## PrintScreen
---
### Home Page
![image1](https://i.imgur.com/ldD8IOh.png)
---
### Login Dialog
![image2](https://i.imgur.com/xqAXunl.png)
---
### Creater Page
![image3](https://i.imgur.com/xkzelZT.png)