from datetime import date
from unittest.mock import patch
from app.services.streak import weekly

# Fecha fija para todos los tests: semana 24 de 2026
TODAY = date(2026, 6, 10)  # martes, semana 24

def patched(dates):
    """Ejecuta calculate_current_streak con fecha fija."""
    with patch("app.services.streak.weekly.date") as mock_date:
        mock_date.today.return_value = TODAY
        mock_date.side_effect = lambda *a, **kw: date(*a, **kw)
        return weekly.calculate_current_streak(dates)


# --- calculate_current_streak ---

def test_sin_completions():
    assert patched([]) == 0

def test_solo_semana_actual():
    # Una fecha cualquiera de la semana 24
    assert patched([date(2026, 6, 9)]) == 1

def test_semanas_consecutivas():
    # Semana 24, 23 y 22
    dates = [date(2026, 6, 9), date(2026, 6, 1), date(2026, 5, 25)]
    assert patched(dates) == 3

def test_racha_rota():
    # Semana 24 y 22 (falta la 23)
    dates = [date(2026, 6, 9), date(2026, 5, 25)]
    assert patched(dates) == 1

def test_sin_semana_actual():
    # Solo semana 23, no la actual
    dates = [date(2026, 6, 1)]
    assert patched(dates) == 0


# --- calculate_best_streak ---

def test_best_streak_basico():
    dates = [date(2026, 6, 9), date(2026, 6, 1), date(2026, 5, 25)]
    assert weekly.calculate_best_streak(dates) == 3

def test_best_streak_vacio():
    assert weekly.calculate_best_streak([]) == 0

def test_best_streak_con_gap():
    # Semanas: 24, 23, 21, 20 → mejor racha es 2
    dates = [
        date(2026, 6, 9),   # sem 24
        date(2026, 6, 1),   # sem 23
        date(2026, 5, 18),  # sem 21
        date(2026, 5, 11),  # sem 20
    ]
    assert weekly.calculate_best_streak(dates) == 2