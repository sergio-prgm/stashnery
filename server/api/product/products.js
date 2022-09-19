module.exports = {
  "codeToName": {
    "journal": {
      "color": [
        {"K": "black"},
        {"G": "gray"},
        {"N": "navy"}
      ],
      "size": [
        {"M": "A5"},
        {"S": "A6"},
        {"L": "A4"}
      ]
    },
    "case": {
      "color": [
        {"K": "black"},
        {"W": "white"},
        {"S": "silver"}
      ],
      "size": [
        {"L": "large"},
        {"M": "medium"},
        {"S": "small"}
      ]
    },
    "pen": {
      "color": [
        {"K": "black"},
        {"B": "blue"},
        {"BK": "blue-black"}
      ]
    }
  },
  "products": [
    {
      "name": "Standard Journal",
      "category": "journal",
      "id": "SJ",
      "price": 12.99,
      "description": "Great quality materials and basic features for managing your busy life.",
      "images": {
        "main": "/img/basic-front.webp",
        "detail": "/img/basic-inside.webp"
      },
      "availability": 
        {
          "state": "in-stock",
          "items-left": 23
        },
      "variations": {
        "color": ["K", "G", "N"],
        "size": ["M", "S"]
      },
      "items": [
        {"code": "KM", "amount": 22},
        {"code": "KS", "amount": 4},
        {"code": "GM", "amount": 12},
        {"code": "GS", "amount": 0},
        {"code": "NM", "amount": 27},
        {"code": "NS", "amount": -1}
      ]
    },
    {
      "name": "Jumbo Journal",
      "category": "journal",
      "id": "JJ",
      "price": 16.99,
      "description": "The same great quality as our best seller Standard Journal but with twice the pages",
      "images": {
        "main": "/img/plain-front.webp",
        "detail": "/img/plain-inside.webp",
        "extra": "/img/plain-first.webp"
      },
      "availability": 
        {
          "state": "in-stock",
          "items-left": 23
        },
      "variations": {
        "color": ["K", "G"],
        "size": ["M"]
      },
      "items": [
        {"code": "KM", "amount": -1},
        {"code": "GM", "amount": -2}
      ]
    },
    {
      "name": "Premium Journal",
      "category": "journal",
      "id": "PJ",
      "price": 22.99,
      "description": "The best materials and all of the features for all the power self improvers out there.",
      "images": {
        "main": "/img/colorblock-front.webp",
        "detail": "/img/colorblock-inside.webp"
      },
      "availability": 
        {
          "state": "pending"
        },
      "variations": {
        "color": ["K", "N"],
        "size": ["M"]
      },
      "items": [
        {"code": "KM", "amount": 14},
        {"code": "NM", "amount": 5}
      ]
    },
    {
      "name": "Spiral Journal",
      "category": "journal",
      "id": "SJ",
      "price": 20.99,
      "description": "Comfortable and versatile writing experience. It packs all the features and the most important of them all: spine-crack-free state of mind.",
      "images": {
        "main": "/img/spiral-front.webp",
        "detail": "/img/spiral-inside.webp",
        "extra": "/img/spiral-first.webp"
      },
      "availability": 
        {
          "state": "pending"
        },
      "variations": {
        "color": ["K", "N"],
        "size": ["M"]
      },
      "items": [
        {"code": "KM", "amount": 14},
        {"code": "NM", "amount": 5}
      ]
    },
    {
      "name": "Aluminum Pencil Case",
      "category": "case",
      "id": "AC",
      "price": 18.99,
      "description": "The most durable case we offer. Anodized aluminum body that can fit all the essential writing utensils you'll ever need.",
      "images": {
        "main": "/img/open-alpc.webp",
        "detail": "/img/close-alpc.webp"
      },
      "variations": {
        "color": ["S"],
        "size": ["M"]
      },
      "items": [
        {"code": "SM", "amount": 3}
      ]
    },
    {
      "name": "Clear Pencil Case",
      "category": "case",
      "id": "CC",
      "price": 14.99,
      "description": "Minimal, inspiring, elegant. For all the writing utensil voyeurs and the organization freaks. The best seller clear pen case that you must have.",
      "images": {
        "main": "/img/open-cpc.webp",
        "detail": "/img/close-cpc.webp"
      },
      "variations": {
        "color": ["S"],
        "size": ["M"]
      },
      "items": [
        {"code": "SM", "amount": 3}
      ]
    },
    {
      "name": "Black Clear Pen",
      "category": "pen",
      "id": "BCP",
      "price": 1.79,
      "description": "Minimalist yet ergonomic gel ink pen with great writing properties and feel. No bleed-through, smooth experience.",
      "images": {
        "main": "/img/kpen-front.webp",
        "detail": "/img/kpen-detail.webp"
      },
      "variations": {
        "color": ["K"],
        "size": ["M", "L"]
      },
      "items": [
        {"code": "KM", "amount": 23},
        {"code": "KL", "amount": 34}
      ]
    },
    {
      "name": "Aluminum Fountain Pen",
      "category": "pen",
      "id": "FP",
      "price": 18.99,
      "description": "The most elegant writing tool. Completely cylindrical and smooth aluminum pen body with subtle knurling around the grip area. Only available with a medium size nib. Comes with a pack of 5 ink cartridges.",
      "images": {
        "main": "/img/fount-front.webp",
        "detail": "/img/fount-detail.webp"
      },
      "variations": {
        "color": ["K", "BK"],
        "size": ["M"]
      },
      "items": [
        {"code": "KM", "amount": 0},
        {"code": "BKM", "amount": 0}
      ]
    }
  ]
}