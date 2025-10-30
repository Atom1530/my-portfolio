# 🎨 Hero Section - Структура и Эффекты

## 📁 Расположение файлов

```
/app/frontend/src/sections/
├── Hero.tsx          # TypeScript компонент (182 строки)
└── Hero.css          # CSS стили и анимации (150+ строк)
```

---

## 🎬 Эффекты и где они находятся

### 1. **Floating Particles (Плавающие частицы)**
📍 **Файл**: `Hero.tsx` - строки 20-41  
🔧 **Технология**: `framer-motion`  
```tsx
<div className="particles-container">
  {[...Array(20)].map((_, i) => (
    <motion.div
      className="particle"
      animate={{ x, y }}  // Бесконечное движение
    />
  ))}
</div>
```
💅 **Стили**: `Hero.css` - строки 32-50

---

### 2. **Animated Gradient Background (Анимированный градиент)**
📍 **Файл**: `Hero.tsx` - строка 17  
💅 **Анимация**: `Hero.css` - строки 8-29
```css
.hero-gradient-bg {
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(5deg); }
}
```

---

### 3. **3D Avatar with Glow (Аватар с 3D эффектом)**
📍 **Файл**: `Hero.tsx` - строки 50-66  
🔧 **Эффекты**:
- `initial`: вращение -180deg, scale 0
- `animate`: появление с пружинным эффектом
- `whileHover`: 3D вращение (rotateY: 15, rotateX: 15)

💅 **Стили**: `Hero.css` - строки 59-76
```css
.hero-avatar {
  perspective: 1000px;
  transform-style: preserve-3d;
}
.avatar-glow {
  animation: glow 2s infinite;
}
```

---

### 4. **Typing Animation (Печатающийся текст)**
📍 **Файл**: `Hero.tsx` - строки 89-105  
📚 **Библиотека**: `react-type-animation`
```tsx
<TypeAnimation
  sequence={[
    'Frontend Developer', 2000,
    'React Specialist', 2000,
    'Team Leader', 2000,
  ]}
  speed={50}
  repeat={Infinity}
/>
```
💅 **Стили**: `Hero.css` - строки 89-99

---

### 5. **Sparkle Icon (Блестящая иконка)**
📍 **Файл**: `Hero.tsx` - строки 78-88  
🔧 **Анимация**:
```tsx
<motion.span
  animate={{
    rotate: [0, 360],
    scale: [1, 1.2, 1],
  }}
  transition={{ duration: 3, repeat: Infinity }}
>
  <Sparkles />
</motion.span>
```
💅 **Стили**: `Hero.css` - строки 82-87

---

### 6. **Animated Buttons (Анимированные кнопки)**
📍 **Файл**: `Hero.tsx` - строки 148-174  
🔧 **Эффекты**:
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Button>View Projects</Button>
</motion.div>
```

---

### 7. **Scroll Indicator (Индикатор прокрутки)**
📍 **Файл**: `Hero.tsx` - строки 175-189  
🔧 **Анимация**: Стрелка вниз ↓ движется вверх-вниз
```tsx
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  ↓
</motion.div>
```
💅 **Стили**: `Hero.css` - строки 101-114

---

## 📚 Используемые библиотеки

### 1. **framer-motion** (12.23.24)
Все анимации используют эту библиотеку:
- `motion.div` - анимированные элементы
- `initial`, `animate`, `transition` - свойства анимации
- `whileHover`, `whileTap` - интерактивные эффекты

### 2. **react-type-animation** (3.2.0)
Только для печатающегося текста

### 3. **lucide-react** (0.507.0)
Иконки: Sparkles, ChevronRight

---

## 🎨 CSS переменные (используемые цвета)

```css
--bg-primary: #0a0a0a        /* Черный фон */
--accent-purple: #8b5cf6     /* Фиолетовый */
--accent-blue: #6366f1       /* Синий */
--accent-purple-light: #a78bfa
--accent-blue-light: #818cf8
```

---

## 🔧 Как изменить эффекты?

### Изменить скорость typing:
📝 **Файл**: `Hero.tsx` - строка 101
```tsx
speed={50}  // Увеличь для быстрее, уменьши для медленнее
```

### Изменить количество частиц:
📝 **Файл**: `Hero.tsx` - строка 21
```tsx
{[...Array(20)].map...  // Измени 20 на любое число
```

### Изменить скорость gradient:
📝 **Файл**: `Hero.css` - строка 18
```css
animation: gradientShift 15s ease infinite;  /* Измени 15s */
```

### Изменить 3D эффект avatar:
📝 **Файл**: `Hero.tsx` - строка 59
```tsx
whileHover={{ 
  scale: 1.1,
  rotateY: 15,  // Изменить угол вращения
  rotateX: 15,
}}
```

---

## 📦 Все файлы одним списком

```
/app/frontend/src/
├── sections/
│   ├── Hero.tsx          # 🎬 Все анимации
│   ├── Hero.css          # 💅 Все стили
│   ├── About.tsx
│   ├── About.css
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Experience.css
│   ├── Contact.tsx
│   ├── Contact.css
│   ├── Header.tsx
│   └── Footer.tsx
├── components/ui/        # Shadcn компоненты
├── types/               # TypeScript типы
├── App.tsx              # Главный файл
├── App.css              # Глобальные стили
└── mockData.ts          # Данные портфолио
```

---

## 💡 Советы

1. **Все анимации** используют `framer-motion` - это главная библиотека
2. **CSS эффекты** (gradient, glow) в `Hero.css`
3. **Typing effect** использует отдельную библиотеку `react-type-animation`
4. **Частицы** создаются динамически в цикле (20 штук)
5. **3D эффекты** работают через CSS `perspective` и `transform-style`

---

**Вся магия Hero секции находится в этих двух файлах! 🎨✨**
