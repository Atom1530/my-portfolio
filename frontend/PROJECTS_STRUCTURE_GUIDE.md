# 🎠 Projects Section - Структура и Стили

## 📁 Расположение файлов

```
/app/frontend/src/
├── sections/
│   └── Projects.tsx      # TypeScript компонент с Swiper
└── App.css               # ВСЕ стили для Projects (строки 370-530)
```

⚠️ **Важно**: Файл `Projects.css` был удалён! Все стили теперь в `App.css`

---

## 🎨 Структура Projects.tsx

### Импорты (строки 1-10)
```tsx
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Briefcase, Github, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
```

### Компонент (строки 16-99)
```tsx
export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Заголовок секции */}
        <motion.div className="section-header">
          <Briefcase className="section-icon" />
          <h2 className="section-title">Projects</h2>
        </motion.div>

        {/* Сетка проектов */}
        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <motion.div key={project.id}>
              <Card className="project-card">
                {/* Swiper слайдер */}
                {/* Информация о проекте */}
                {/* Технологии и ссылки */}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## 🎠 Swiper Slider конфигурация

📍 **Файл**: `Projects.tsx` - строки 47-57

```tsx
<Swiper
  modules={[Autoplay, Pagination]}
  slidesPerView={1}
  autoplay={{
    delay: 3500,              // 3.5 секунды на слайд
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,           // Можно кликать по точкам
  }}
  loop={project.images.length > 1}  // Зацикливание если > 1 картинки
  className="image-slider"
>
```

---

## 💅 Стили в App.css

### 1. Projects Grid (строки 371-397)
```css
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
  align-items: stretch;         /* Все карточки одной высоты! */
}

.projects-grid > * {
  flex: 1 1 100%;              /* Mobile: 1 карточка */
  max-width: 100%;
  display: flex;
}

@media (min-width: 768px) {
  .projects-grid > * {
    flex: 1 1 calc(50% - 1rem);   /* Tablet: 2 карточки */
    max-width: calc(50% - 1rem);
  }
}

@media (min-width: 1024px) {
  .projects-grid > * {
    flex: 1 1 calc(33.333% - 1.5rem);  /* Desktop: 3 карточки */
    max-width: calc(33.333% - 1.5rem);
  }
}
```

### 2. Project Card (строки 399-413)
```css
.project-card {
  background: var(--bg-card);
  border-color: var(--border-color);
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;    /* Вертикальный layout */
  width: 100%;
  height: 100%;              /* Занимает всю высоту */
}

.project-card:hover {
  transform: translateY(-6px);  /* Поднимается при hover */
  border-color: var(--accent-purple);
}
```

### 3. Image Slider (строки 446-479)
```css
.project-images {
  position: relative;
  width: 100%;
  height: 220px;            /* Фиксированная высота */
  overflow: hidden;
  background: var(--bg-secondary);
  flex-shrink: 0;           /* Не сжимается */
}

.image-slider {
  width: 100%;
  height: 100%;
}

.image-slider img {
  width: 100%;
  height: 220px;
  object-fit: cover;        /* Обрезает картинку если нужно */
}

/* Pagination dots */
.image-slider .swiper-pagination {
  bottom: 10px;
}

.image-slider .swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.6);
  opacity: 1;
}

.image-slider .swiper-pagination-bullet-active {
  background: var(--accent-purple);  /* Активная точка фиолетовая */
  width: 20px;                       /* Шире чем обычные */
  border-radius: 4px;
}
```

### 4. Status Badge (строки 481-486)
```css
.status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;              /* Поверх слайдера */
}
```

### 5. Card Content (строки 488-511)
```css
.project-card .card-header {
  flex-shrink: 0;           /* Заголовок не сжимается */
}

.project-card .card-content {
  flex: 1;                  /* Занимает свободное место */
  display: flex;
  flex-direction: column;
  justify-content: space-between;  /* Распределяет контент */
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;         /* Кнопки прижаты к низу */
}
```

### 6. Buttons (строки 513-522)
```css
.btn-live {
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  color: white;
  border: none;
}

.btn-live:hover {
  transform: translateY(-2px);  /* Поднимается при hover */
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}
```

---

## 🎯 Как работает равная высота карточек?

```css
.projects-grid {
  align-items: stretch;     /* 1️⃣ Растягивает все элементы */
}

.projects-grid > * {
  display: flex;            /* 2️⃣ Делает div flex-контейнером */
}

.project-card {
  display: flex;            /* 3️⃣ Card тоже flex */
  flex-direction: column;
  height: 100%;             /* 4️⃣ Занимает всю высоту родителя */
}

.project-card .card-content {
  flex: 1;                  /* 5️⃣ Растягивается на свободное место */
}

.project-actions {
  margin-top: auto;         /* 6️⃣ Кнопки прижаты к низу */
}
```

**Результат**: Все 3 карточки одинаковой высоты (446px)!

---

## 🔧 Как настроить?

### Изменить скорость автоплея:
📝 **Файл**: `Projects.tsx` - строка 51
```tsx
autoplay={{ delay: 3500 }}  // Измени 3500 (мс)
```

### Изменить высоту изображений:
📝 **Файл**: `App.css` - строки 449, 462
```css
height: 220px;  /* Измени на нужную высоту */
```

### Изменить количество колонок:
📝 **Файл**: `App.css` - строка 394
```css
flex: 1 1 calc(33.333% - 1.5rem);  /* 33.333% = 3 колонки */
/* Для 2 колонок: 50% */
/* Для 4 колонок: 25% */
```

### Изменить цвет активной точки:
📝 **Файл**: `App.css` - строка 476
```css
background: var(--accent-purple);  /* Измени цвет */
```

### Изменить hover эффект:
📝 **Файл**: `App.css` - строка 411
```css
transform: translateY(-6px);  /* Измени значение */
```

---

## 📦 Используемые библиотеки

### Swiper.js (12.0.3)
```bash
yarn add swiper
```

**Модули**:
- `Autoplay` - автоматическое переключение слайдов
- `Pagination` - точки навигации снизу

**CSS импорты**:
```tsx
import 'swiper/css';
import 'swiper/css/pagination';
```

### Framer Motion (12.23.24)
Используется только для fade-in анимации карточек:
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
>
```

---

## 📊 Структура одной карточки

```
┌─────────────────────────────────┐
│  .project-images (220px)        │  ← Swiper slider
│  - Swiper                        │
│  - Status badge (абсолютный)    │
├─────────────────────────────────┤
│  CardHeader                      │  ← Фиксированный
│  - Title                         │
│  - Description                   │
├─────────────────────────────────┤
│  CardContent (flex: 1)           │  ← Растягивается
│  ┌───────────────────────────┐  │
│  │ .tech-list                │  │
│  │ - Badge, Badge, Badge     │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ .project-actions          │  │  ← margin-top: auto
│  │ - GitHub button           │  │
│  │ - Live Demo button        │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

---

## 🎨 CSS переменные

Используемые в Projects:
```css
--bg-card: #141414           /* Фон карточки */
--border-color: #2a2a2a      /* Цвет границы */
--accent-purple: #8b5cf6     /* Фиолетовый акцент */
--accent-blue: #6366f1       /* Синий акцент */
--text-primary: #ffffff      /* Основной текст */
--text-secondary: #a1a1aa    /* Вторичный текст */
```

---

## 📝 Итого

**Файлы**:
- `Projects.tsx` - компонент с Swiper
- `App.css` (строки 370-530) - ВСЕ стили

**Эффекты**:
- ✅ Auto-slider (3.5s)
- ✅ Равная высота всех карточек
- ✅ Hover эффекты (поднимается, меняет цвет границы)
- ✅ Responsive (1/2/3 колонки)
- ✅ Dot pagination с активным состоянием
- ✅ Fade-in анимация при прокрутке

**Всё настраивается через App.css и Projects.tsx! 🚀**
