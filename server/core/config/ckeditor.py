# CKEDITOR CONFIGS
CKEDITOR_UPLOAD_PATH = "ckeditor_uploads/"

iframeEditing = True
removePlugins = 'link'
allowedContent = True
htmlEncodeOutput = True
disallowedContent = {'script', 'iframe', 'javascript'}

CKEDITOR_IMAGE_BACKEND = "pillow"

CKEDITOR_5_ALLOW_ALL_FILE_TYPES = True

CKEDITOR_5_CUSTOM_CSS = "custom.css"

CKEDITOR_5_CUSTOM_JS = {
    'pastefilter': '''
        CKEDITOR.plugins.add('pastefilter', {
          init: function(editor) {
            editor.on('paste', function(evt) {
              evt.preventDefault();
              evt.stopPropagation();
              var data = evt.data;
              data.html = data.html.replace(/<a[^>]*>/g, function(match) {
                return match.replace('href', 'data-href');
              });
            });
          }
        });
    '''
}

customColorPalette = [
    {"color": "hsl(4, 90%, 58%)", "label": "Red"},
    {"color": "hsl(340, 82%, 52%)", "label": "Pink"},
    {"color": "hsl(291, 64%, 42%)", "label": "Purple"},
    {"color": "hsl(262, 52%, 47%)", "label": "Deep Purple"},
    {"color": "hsl(231, 48%, 48%)", "label": "Indigo"},
    {"color": "hsl(207, 90%, 54%)", "label": "Blue"},
]


CKEDITOR_5_CONFIGS = {
    'default': {
        'paste': {
            'forcePlainText': True,
            'linkCreation': False,
        }, 
        'htmlSupport': {
            'allow': [
                'a',
                # Other allowed HTML elements...
            ],
            'disallow': [
                'a[href]',  # Disallow links with href attribute
                # Other disallowed HTML elements...
            ],
        }, 
        'extraPlugins': ','.join(['sourcearea']),
        'removePlugins': 'Link',  # Disables automatic link handling
        # other configurations...  
        'link': {
            'addTargetToExternalLinks': False,
            'defaultProtocol': 'https://',  # Prevents redirection by controlling protocol behavior
        },    
        "toolbar": [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
        ],
    },  
    "extends": {        
        "blockToolbar": [
            "paragraph",
            "heading1",
            "heading2",
            "heading3",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "blockQuote",
        ],
        "toolbar": {
            "items": [
                "heading",
                "bold",
                "italic",
                "link",
                "underline",
                "strikethrough",
                "horizontalLine",
                "removeFormat",           
                "outdent",
                "indent",                            
                "code",
                "subscript",
                "superscript",
                "highlight",
                "|",
                "bulletedList",
                "numberedList",
                "todoList",
                "|",
                "blockQuote",                
                "insertImage",
                "|",
                "fontSize",
                "fontFamily",
                "fontColor",
                "fontBackgroundColor",                
                "insertTable",
                "sourceEditing",                
            ],
            "shouldNotGroupWhenFull": True,
        },
        "image": {
            "toolbar": [
                "imageTextAlternative",
                "|",
                "imageStyle:alignLeft",
                "imageStyle:alignRight",
                "imageStyle:alignCenter",
                "imageStyle:side",
                "|",
            ],
            "styles": [
                "full",
                "side",
                "alignLeft",
                "alignRight",
                "alignCenter",
            ],
        },
        "table": {
            "contentToolbar": [
                "tableColumn",
                "tableRow",
                "mergeTableCells",
                "tableProperties",
                "tableCellProperties",
                "toggleTableCaption",
            ],
            "tableProperties": {
                "borderColors": customColorPalette,
                "backgroundColors": customColorPalette,
            },
            "tableCellProperties": {
                "borderColors": customColorPalette,
                "backgroundColors": customColorPalette,
            },
        },
        "heading": {
            "options": [
                {
                    "model": "paragraph",
                    "title": "Paragraph",
                    "class": "ck-heading_paragraph",
                },
                {
                    "model": "heading1",
                    "view": "h1",
                    "title": "Heading 1",
                    "class": "ck-heading_heading1",
                },
                {
                    "model": "heading2",
                    "view": "h2",
                    "title": "Heading 2",
                    "class": "ck-heading_heading2",
                },
                {
                    "model": "heading3",
                    "view": "h3",
                    "title": "Heading 3",
                    "class": "ck-heading_heading3",
                },
            ],
        },} 
}
