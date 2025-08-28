# Gogame

## 📜 Лицензия
Этот проект распространяется под лицензией **MIT**.  
Подробнее см. [LICENSE](LICENSE).

### Ссылка на сайт
[Ссылка на сайт где вы можете увидеть все анимации!](https://blackdarkes.github.io/Gogames/ "Перейти к сайту")

**Описание проекта**: Gogame — это сайтпро VR индустрию с анимациями, он написан на react(TypeScript). На данном сайте анимирован почти каждый из блоков, а именно шапка сайта при прокрутке у неё появляется задний фон, первый блок с анимацией появления и крутящимся крестиком, второй блок с плавной покачивающейся анимацией и третий блок где крутятся шестеренки и также плавно качается геймпад, что 
делает его более привлекательным и современным. Сайт адаптирован под различные устройства и размеры экранов.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/React-18%2B-blue)](https://reactjs.org) 

### Функционал

- Просмотр афиш.
- Онлайн покупка билетов.
- Информация о театре.
- Список новостей.

### Технологии

- **Frontend**: React 18, TypeScript, Framer motion, gh-pages, React Router 6, React Query, Axios, Vite, SCSS, SVGR.
  [![React](https://img.shields.io/badge/React-18-%2361DAFB?logo=react)](https://reactjs.org/)  
  [![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-%233178C6?logo=typescript)](https://www.typescriptlang.org/)  
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-%23005DFF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![gh-pages](https://img.shields.io/badge/gh--pages-Deploy-blue?logo=github&logoColor=white)](https://github.com/tschaub/gh-pages)
  [![React Router](https://img.shields.io/badge/React_Router-6-%23CA4245?logo=react-router)](https://reactrouter.com/)  
  [![React Query](https://img.shields.io/badge/React_Query-5-%23FF4154?logo=react-query)](https://tanstack.com/query/latest/)  
  [![Axios](https://img.shields.io/badge/Axios-1.x-%235A29E4?logo=axios)](https://axios-http.com/)  
  [![Vite](https://img.shields.io/badge/Vite-4-%23646CFF?logo=vite)](https://vitejs.dev/)  
  [![SCSS](https://img.shields.io/badge/SCSS-1.65%2B-%23CC6699?logo=sass)](https://sass-lang.com/)  
  [![SVGR](https://img.shields.io/badge/SVGR-8-%23FF4785?logo=svg)](https://react-svgr.com/)  
  [![FSD](https://img.shields.io/badge/FSD-Architecture-%23007EC6)](https://feature-sliced.design/) 
- **Дизайн**: Figma.
  [![Figma](https://img.shields.io/badge/Figma-Design-%23F24E1E?logo=figma)](https://figma.com/)

### Установка

1. Клонирование репозитория:

   ```bash
   git clone https://github.com/BlackDarkes/Gogames.git

   ```

2. Запустите проект:
   
    Node.js >= 18.x
    npm >= 9.x
   ```bash
    npm install && npm run dev
   ```

### Пример кода
```TypeScript
 import type { ReactNode } from "react";
 import styles from './Container.module.scss'

 interface IContainerProps {
   children: ReactNode;
   className?: string;
 }
   
 export const Container = ({ children, className }: IContainerProps) => {
   return (
     <div className={`${styles.container} ${className}`}>{children}</div>
   );
 }
```

### Структура проекта:
     project/  
     ├── public/       
     ├── src/        
     ├── vite.config.ts        
     ├── tsconfig       
     ├── README.md   
     └── LICENSE.md   

## Изображения проекта:
1. **Desktop изображения:**
  ![Главная страница (десктоп)](images/desktop.png)
  *Рис. 1: Главная страница сайта в десктопной версии.*

1. **Mobile изображения:**
   
   ![Главная страница (мобильный)](images/mobile.png)

   *Рис. 2: Главная страница сайта в мобильной версии.*

   ![СБургер меню. (мобильный)](images/burger.png)

   *Рис. 3: Бургер меню.*