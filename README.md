# iPhone-Style Calculator

A simple calculator built with HTML, CSS and JavaScript inspired by the iOS calculator app

## Preview

<img width="956" height="1006" alt="Calculator(iPhone) - Google Chrome 5_13_2026 1_16_30 PM" src="https://github.com/user-attachments/assets/e185c048-b8d3-4dd1-bc47-ab0788d02a62" />

## Features

- Basic arithmetic: addition, subtraction, multiplication, division  
- Toggle positive/negative with the +/− button  
- Percentage calculation  
- Decimal support  
- Shows the current expression above the main display  
- AC/C button (switches to C if there's something to clear)  
- Operator highlight (the selected operator stays highlighted like on iPhone)  
- Font resizes automatically when numbers get long  

## Files
```
calculator/
├── index.html # structure and buttons
├── style.css # all the styling
├── script.js # calculator logic
└── README.md
```


## How to Run

Just open `index.html` in your browser. No installations needed

## How It Works

The JS keeps track of three main variables:

- currentNumber — what's on the screen  
- previousNumber — the first number before an operator is pressed  
- operator — whichever operation was selected (+, −, ×, ÷)  

When you press =, it runs a simple if/else to determine which operation to do and displays the result

## Built With

- HTML  
- CSS (used grid for button layout)  
- Vanilla JavaScript (no libraries)
