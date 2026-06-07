from datetime import date, timedelta

# Calculamos racha actual
def calculate_current_streak(completion_dates):
    """
    completion_dates:
    lista de fechas ordenadas DESC
    """

    if not completion_dates:
        return 0

    streak = 0
    check_date = date.today()

    for completion_date in completion_dates:
        if completion_date == check_date:
            streak += 1
            check_date -= timedelta(days=1)
        
        else:
            break

    return streak
    
# Calculamos la mejor racha
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
            best = max(best, current)

        else:
            current = 1
    return best
    
