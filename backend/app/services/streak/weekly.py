from datetime import date

def get_year_week(d):
    return d.isocalendar()[:2]


def week_to_number(year, week):
    return year * 52 + week


def get_completed_weeks(completion_dates):
    weeks = []

    for d in completion_dates:
        year, week = get_year_week(d)
        week_number = week_to_number(year, week)

        if week_number not in weeks:
            weeks.append(week_number)

    return weeks


def calculate_current_streak(completion_dates):
    weeks = sorted(get_completed_weeks(completion_dates), reverse=True)

    if not weeks:
        return 0

    current_year, current_week = date.today().isocalendar()[:2]
    check_week = week_to_number(current_year, current_week)

    streak = 0

    for w in weeks:
        if w == check_week:
            streak += 1
            check_week -= 1
        else:
            break

    return streak


def calculate_best_streak(completion_dates):
    weeks = get_completed_weeks(completion_dates)

    if not weeks:
        return 0

    best = 1
    current = 1

    for i in range(1, len(weeks)):
        if weeks[i - 1] - weeks[i] == 1:
            current += 1
            best = max(best, current)
        else:
            current = 1

    return best