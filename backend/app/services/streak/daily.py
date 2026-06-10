from datetime import date, timedelta

def calculate_current_streak(completion_dates):
    if not completion_dates:
        return 0

    streak = 0
    check_date = date.today()

    for d in completion_dates:
        if d == check_date:
            streak += 1
            check_date -= timedelta(days=1)
        else:
            break

    return streak


def calculate_best_streak(completion_dates):
    if not completion_dates:
        return 0

    best = 1
    current = 1

    for i in range(1, len(completion_dates)):
        if completion_dates[i - 1] - completion_dates[i] == timedelta(days=1):
            current += 1
            best = max(best, current)
        else:
            current = 1

    return best