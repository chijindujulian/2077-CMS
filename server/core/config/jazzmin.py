JAZZMIN_SETTINGS = {
    "site_brand": "2077 Collective Admin",
    # title of the window (Will default to current_admin_site.site_title if absent or None)
    "site_title": "2077 Collective Admin",
    # Title on the login screen (19 chars max) (defaults to current_admin_site.site_header if absent or None)
    "site_header": "2077 Collective",
    # Logo to use for your site, must be present in static files, used for brand on top left
    "site_logo": "../staticfiles/images/logo.png",
    # Logo to use for your site, must be present in static files, used for login form logo (defaults to site_logo)
    "login_logo": "../staticfiles/images/logo.png",
    # CSS classes that are applied to the logo above
    "site_logo_classes": "img-circle",
    # Relative path to a favicon for your site, will default to site_logo if absent (ideally 32x32 px)
    "site_icon": "../staticfiles/images/logo.img",
    # Welcome text on the login screen
    "welcome_sign": "Welcome to the 2077 Collective Admin Section",
    # Copyright on the footer
    "copyright": "2077 Collective Ltd",
    # The model admin to search from the search bar, search bar omitted if excluded
    "search_model": [],
    # Field name on user model that contains avatar ImageField/URLField/Charfield or a callable that receives the user
    # "user_avatar": "avatar",

    #############
    # User Menu #
    #############
    # Additional links to include in the user menu on the top right ("app" url type is not allowed)
    "usermenu_links": [{"name": "2077 Collective Platform"}, {"model": "core.user"}],

    #############
    # Side Menu #
    #############
    # Whether to display the side menu
    "show_sidebar": True,
    # Whether to aut expand the menu
    "navigation_expanded": True,
    # Hide these apps when generating side menu e.g (auth)
    "hide_apps": {"authtoken": ['tokenproxy'], "token_blacklist": ["blacklistedtoken", "outstandingtoken"]},
    # List of apps (and/or models) to base side menu ordering off of (does not need to contain all apps/models)
    "order_with_respect_to": ["auth", "research"],

    "related_modal_active": False,

    "icons": {
        "auth.group": "fas fa-users",
        "auth.user": "fas fa-universal-access",
        "research.article": "fas fa-newspaper",
        "research.category": "fas fa-list",
    },
    # Icons that are used when one is not manually specified
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",

    #############
    # UI Tweaks #
    #############
    "changeform_format": "carousel",
    # override change forms on a per modeladmin basis
    "changeform_format_overrides": {
        "auth.user": "collapsible",
        "auth.group": "vertical_tabs",
        "research.article": "horizontal_tabs_bottom_buttons",
    },
}

JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": True,
    "brand_colour": "navbar-teal",
    "accent": "accent-navy",
    "navbar": "navbar-teal navbar-dark",
    "no_navbar_border": True,
    "navbar_fixed": False,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": False,
    "sidebar": "sidebar-light-teal",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": False,
    "sidebar_nav_compact_style": False,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "yeti",
    "dark_mode_theme": "darkly",
    "button_classes": {
        "primary": "btn-outline-primary",
        "secondary": "btn-outline-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success"
    },
    "actions_sticky_top": False
}
