from datetime import date, timedelta

# Calculamos racha actual
def calculate_current_streak(completion_dates):
    """
    completion_dates:
    lista de fechas ordenadas DESC
    """

    if not completion_dates:
        return 0

    # Variables iniciales
    streak = 0
    check_date = date.today()

    for completion_date in completion_dates:
        # Si el completion date es el mismo que el dia actual se suma 1 a la racha
        if completion_date == check_date:
            streak += 1
            # Retrocedemos 1 día para que el loop ahora sea el día 6
            check_date -= timedelta(days=1)
        
        else:
            break

    return streak
    
# Calculamos la mejor racha histórica
def calculate_best_streak(completion_dates):
    if not completion_dates:
        return 0
    
    best = 1
    current = 1

    for i in range(1, len(completion_dates)):
        
        previous = completion_dates[i - 1]
        current_date = completion_dates[i]

        if previous - current_date == timedelta(days=1):
            
            current += 1
            # guardamos la mejor racha encontrada hasta ahora
            best = max(best, current)

        else:
            current = 1
    return best
    
