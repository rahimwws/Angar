export const getRandomStars = (numColors:number)=>{
    const colors: string[] = [];
    
    // Генерируем numColors - 1 черных цветов
    for (let i = 0; i < numColors - 1; i++) {
        colors.push("#FFD166"); // черный цвет
    }
    
    // Генерируем один белый цвет
    colors.push("#DFDEDC"); // белый цвет
    
    // Перемешиваем массив, чтобы цвета были в случайном порядке
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    
    return colors;
}