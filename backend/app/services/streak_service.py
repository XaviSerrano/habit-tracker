from app.services.streak import daily, weekly


def calculate_current_streak(completion_dates, frequency="daily"):
    if frequency == "weekly":
        return weekly.calculate_current_streak(completion_dates)

    return daily.calculate_current_streak(completion_dates)


def calculate_best_streak(completion_dates, frequency="daily"):
    if frequency == "weekly":
        return weekly.calculate_best_streak(completion_dates)

    return daily.calculate_best_streak(completion_dates)