from django import template
from landing.models import Item

register = template.Library()


def sport_title(sport_name):
    return Item.get_choice_description(sport_name)


register.filter('sport_title', sport_title)
