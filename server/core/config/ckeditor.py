# CKEDITOR CONFIGS
CKEDITOR_UPLOAD_PATH = "ckeditor_uploads/"

CKEDITOR_IMAGE_BACKEND = "pillow"

customColorPalette = [
    {
        'color': 'hsl(4, 90%, 58%)',
        'label': 'Red'
    },
    {
        'color': 'hsl(340, 82%, 52%)',
        'label': 'Pink'
    },
    {
        'color': 'hsl(291, 64%, 42%)',
        'label': 'Purple'
    },
    {
        'color': 'hsl(262, 52%, 47%)',
        'label': 'Deep Purple'
    },
    {
        'color': 'hsl(231, 48%, 48%)',
        'label': 'Indigo'
    },
    {
        'color': 'hsl(207, 90%, 54%)',
        'label': 'Blue'
    },
]

CKEDITOR_5_CONFIGS = {
    'default': {
        'toolbar': ['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', 'underline', 'strikethrough', 'link', 'horizontalLine', '|', 'fontsize',
                    'fontfamily', 'fontColor', 'fontBackgroundColor', '|', 'alignment', 'outdent', 'indent',
                    'linespacing', '|',
                    'bulletedList', 'numberedList', 'findAndReplace', 'highlight', 'subscript', 'superscript',
                    'specialCharacters', '|', 'imageInsert', 'code', 'codeBlock', 'insertTable', 'mediaEmbed', '|',
                     'blockQuote', 'fullscreen', 'removeFormat'],
        
        'image': {
            'toolbar': ['imageTextAlternative', '|', 'imageStyle:alignLeft',
                        'imageStyle:alignRight', 'imageStyle:alignCenter', 'imageStyle:side', 'imageResize', '|'],
            'styles': [
                'full',
                'side',
                'alignLeft',
                'alignRight',
                'alignCenter',
            ]
        },'blockToolbar': {
            'items': [
                'paragraph', 'heading1', 'heading2', 'heading3',
                '|',
                'bulletedList', 'numberedList',
                '|',
                'blockQuote',
            ],
            'location': 'left',  # Position the block toolbar on the left
        },
    },
    'extends': {
        
    },
    'list': {
        'properties': {
            'styles': 'true',
            'startIndex': 'true',
            'reversed': 'true',
        }
    }
}
