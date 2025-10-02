---
date: 2024-04-03
title: Improving Efficiency for Software Developers
slug: improving-efficiency
description: Non-coding techniques to improve efficiency in computer programming
tags: 
  - productivity
  - efficiency
  - software development
author: Ryan Wolfe
---

# Improving Efficiency for Software Developers

Efficiency is paramount in the fast-paced world of software development

As an established software engineer, you're already well-versed in the intricacies of coding, but there are always ways to streamline your workflow and boost productivity.

In this document, we'll explore various techniques to improve efficiency in computer programming.

## Table of Contents

1. [Baseline Skills](#1-baseline-skills)
2. [Command Line (MacOS/Linux)](#2-command-line-macoslinux)
3. [Keyboard Shortcuts](#3-keyboard-shortcuts)
4. [IDE Shortcuts](#4-ide-shortcuts)
5. [Additional Tools and Resources (MacOS)](#5-additional-tools-and-resources-macos)
6. [Conclusion](#conclusion)

## 1. Baseline Skills

One of the foundational and sometimes overlooked skills for any programmer is keyboard proficiency, specifically typing speed and accuracy.

The faster you can type (without thinking i.e. muscle memory), the quicker you can translate your thoughts into code, write documentation, navigate around your computer, etc.

### Touch Typing ⌨️

[Touch typing](https://en.wikipedia.org/wiki/Touch_typing) is the technique of typing without looking at the keyboard.  I am also including home row finger placement as part of touch typing.  Learning to touch type will allow you to focus on the screen and code rather than the keyboard.

Disclaimer: Learning how to touch type with "proper" finger placement might initially slow you down, but it won't take long to learn, and the long-term benefits are well worth the investment.

From my own experience, I was a decently fast typer at ~80-100 wpm without using all of my fingers and semi-touch typing. Once I made the effort to learn touch typing, my speed initially dropped to around 70 wpm.   After 3-4 weeks of practice, I was back up to my original speed, eventually surpassing it and reliably typing at 95-115 wpm with fewer errors.


There are numerous online resources and typing tutors available to help you learn touch typing such as https://www.typing.com/student/lessons.

### Typing Speed 🏎️

Going hand in hand with touch typing is typing speed.  The faster you can type, the quicker you can do most tasks on a computer.

Take some time to assess your current typing speed using online tools like https://typingtest.com or https://monkeytype.com/.

To improve your typing speed, you will probably find that with just 5-10 minutes of practice a day, you can make significant progress.


### Exercise 🧪
As an exercise, record your current typing speed (WPM) and then do another test after a week of practice.  How much did you improve?

**Current Typing Speed**: XX WPM\
**1 Week Later**: XX WPM\
**1 Month Later**: XX WPM


## 2. Command Line (MacOS/Linux)

Command line proficiency is a valuable skill for software engineers or any heavy computer user.\
The command line interface (CLI) provides a powerful and efficient way to interact with your computer and perform a wide range of tasks.


### Basic Commands

If you are relatively new to the command line, consider taking an online course or tutorial to get up to speed.\
Here is a blog post that covers some of the basic commands and functionality: https://www.git-tower.com/blog/command-line-cheat-sheet/

#### Command Line Applied
As a real world example of how the command line can be used, consider the following scenario:

You are working in one of our Rails projects that use redis.  You have the server running with redis locally, but the terminal/IDE you are using to run the server crashes/closes for whatever reason.

When you try and restart the server in a new terminal/IDE instance, you get an error saying that the redis server port is already in use.

You need to find the process that is using that port and kill it.

This can potentially be done by opening up the Activity Monitor and searching for the process.

 *But* it is probably much quicker to do it from the command line, without even needing to take your hands off the keyboard:

```bash
# Find the process id (PID) using the port
lsof -i :6379 # 6379 is the default redis port
kill -9 <PID> # Kill the process
```

### Terminal customization
#### Oh-My-Zsh (Optional)
A common shell configuration that enhances the command line experience in MacOS is Oh-My-Zsh. It provides additional features such as auto-completion, syntax highlighting, and themes to customize your shell prompt.

This is totally optional, but it can take you down the path of customizing your shell environment to suit your preferences.

To install Oh-My-Zsh, follow the instructions on the official GitHub repository: https://github.com/ohmyzsh/ohmyzsh

Once installed, explore the various plugins and themes available to customize your shell environment.

Plugins that I find particularly useful include:
- [git](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git), provides aliases and shortcuts for common git commands.
- [z](https://github.com/zsh-users/zsh-autosuggestions), a tool for navigating quickly to frequently used directories.
- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions), suggests completions based on your command history.
- [copybuffer](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/copybuffer), allows you to copy the output of a command to the clipboard.
- [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting), provides syntax highlighting for commands as you type.



#### Aliases

Creating aliases for commonly used commands can save time and reduce typing. Aliases can be defined in your shell configuration file (e.g., .bashrc, .zshrc).

If you are using zsh, you can install the git plugin (mentioned above) to use aliases like `gst` for `git status` or `gl` for `git pull`.  (Note: you can also just create your own git aliases)

Custom Alias Example:
```bash
alias "c=pbcopy"
```
This allows you to copy the output of a command to the clipboard by piping it to `c`.
```bash
cat file.txt | c # copies the contents of file.txt to the clipboard
```

### Vim

Vim is a powerful text editor that runs in the command line. While it has a steep learning curve, learning Vim can significantly boost your productivity now that you are confident with the command line and typing.

Note: Vim is not for everyone, and there are many other text editors available. However, learning Vim (or another CLI text editor) can be a valuable skill to have, especially when working on remote servers or quickly editing files from the command line.

#### Basic Vim Commands

To get started with Vim, learn the basic commands for navigating, editing, and saving files. If you are unfamiliar with the basics of Vim, you can use the built-in Vim tutor by running `vimtutor` in the command line.

#### Vim applied

Say you want to update a README file. You can edit the file in Vim, make your changes, and save them without leaving the command line or taking your hands off the keyboard:

```bash
cd ~/repos/central
vim README.md
# make changes
:wq # save and quit
```

#### Customization

Vim is highly customizable, and you can configure it to suit your preferences. You can create custom key mappings, install plugins, and customize the appearance of Vim to make it more efficient and user-friendly.

There are many resources available online to help you customize Vim, including the official documentation and various tutorials.

Here is my personal `.vimrc` file for reference, I only have a few customizations:

```vim
syntax on " Enable syntax highlighting
set number " Show line numbers

runtime macros/matchit.vim " Enable matching pairs of parentheses, brackets, etc.

set autoindent " Automatically indent new lines based on the previous line (useful for code)
set backspace=indent,eol,start " Allow backspacing over everything in insert mode
set hidden " Allow switching buffers without saving
set incsearch " Incremental search
set ruler " Show the cursor position all the time
set wildmenu " Enhanced command-line completion

inoremap jj <ESC> " Map jj to escape in insert mode (alternative to pressing escape)
```


### Git CLI (Optional)

If you are used to using a GUI for git, consider learning the terminal commands. It can potentially be more efficient, especially for common tasks like committing changes, creating branches, and merging code.

Furthermore, knowing the command line git commands may help you better understand how git works under the hood.

Here's a [quick cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf) for some common git commands.


I tend to use the command line for most git tasks, but I also use a GUI for visualizing the commit history and resolving merge conflicts.

#### Git CLI Applied

Continuing with the previous example of updating a README file, you can use the command line to commit your changes to git:

```bash
cd ~/repos/central
vim README.md
# make changes
:wq # save and quit
git add README.md # or ga README.md
git commit -m "Update README" # or gc -m "Update README"
git push # or gp
```


## 3. Keyboard Shortcuts

Learning keyboard shortcuts is another effective way to boost efficiency for developing and general computer use. Keyboard shortcuts allow you to perform common tasks quickly without having to **navigate through menus** or **use the mouse**.

You are most likely already familiar with many keyboard shortcuts (e.g. copy, paste, undo, save, active window switching), but if you ever find yourself reaching for the mouse or navigating through menus, there is probably a keyboard shortcut that can save you time.

Start with a few shortcuts that you use may frequently and gradually add more to your repertoire.

Here is a list of some common Mac keyboard shortcuts that I find myself using frequently:

```plaintext
Text Manipulation:
Cmd + C: Copy
Cmd + V: Paste
Cmd + X: Cut
Cmd + Z: Undo
Cmd + Shift + Z: Redo
Cmd + S: Save
Cmd + A: Select All
Cmd + Q: Quit application
Ctrl + A or Cmd + Left Arrow: Move to beginning of line
Ctrl + E or Cmd + Right Arrow: Move to end of line
Option + Left Arrow: Move one word left
Option + Right Arrow: Move one word right
Cmd + Backspace: Delete line
Cmd + Shift + Left Arrow: Select text to beginning of line
Cmd + Shift + Right Arrow: Select text to end of line
Shift + Opt/Cmd/Arrow: Highlight text
Cmd + F: Find
Cmd + G: Find next

Window Management:
Cmd + Option + Esc: Force quit application
Cmd + W: Close window
Cmd + Tab: Switch between applications
Cmd + `: Switch between windows of the same application

System:
Cmd + Space: Spotlight search
Cmd + Shift + 3: Screenshot
Cmd + Shift + 4: Screenshot selection

Browser:
Cmd + N: New window
Cmd + T: New tab
Cmd + W: Close tab
Cmd + Shift + T: Reopen last closed tab in browser
Cmd + Shift + N: Open a new incognito window in Chrome
Cmd + Shift + P: Open a new private window in Firefox
Cmd + L: Highlight URL bar
Cmd + R: Refresh page
Cmd + Shift + R: Hard refresh page
Cmd + 1-9: Switch to tab 1-9
Cmd + 0: Switch to last tab
Cmd + [ or ] or Left/Right Arrow: Navigate back or forward in history
Cmd + Option + Left/Right Arrow: Navigate to previous or next tab
```

At the end of the day, the best keyboard shortcuts are the ones that you use frequently and help you save time.  If you find yourself doing a task repeatedly, look for a keyboard shortcut that can help you do it faster.


## 4. IDE Shortcuts

IDEs provide a wealth of keyboard shortcuts to help you navigate, edit, and debug your code more efficiently. Familiarize yourself with the most commonly used shortcuts in your IDE to speed up your workflow.

At the very least, learn the shortcuts for common tasks like:
- Navigating to a file or class
- Code navigation (e.g., jumping to definitions, implementations, or references)
- Refactoring code
- Running tests
- Debugging code
- Commenting/uncommenting code
- Formatting code
- Code completion

As IDEs may have different shortcuts, I won't list them here, but here are some resources to help you find the shortcuts for your specific IDE:

[JetBrains](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html)\
[Visual Studio Code](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

Both IDEs have plugins that can help you learn and practice shortcuts.  For example, the [Key Promoter X](https://plugins.jetbrains.com/plugin/9792-key-promoter-x) plugin for IntelliJ IDEA will show you the keyboard shortcuts you could have used for actions you perform with the mouse.

## 5. Additional Tools and Resources (MacOS)

### Window Snapping 🪟
MacOS does not have built-in window snapping like Windows, but you can use third-party tools like [Rectangle](https://rectangleapp.com/) to achieve similar functionality. These tools allow you to quickly resize and snap windows to different parts of the screen using keyboard shortcuts.

### Spotlight/Alfred 🔎
Spotlight is a powerful search tool built into MacOS that allows you to quickly find files, launch applications, perform calculations, and more. You can access Spotlight by pressing `Cmd + Space`.

[Alfred](https://www.alfredapp.com/) is an alternative to Spotlight that provides additional features like custom workflows, clipboard history, and more. Alfred can be a powerful tool for boosting productivity and automating repetitive tasks.

I personally use Alfred.

### Clipboard Managers 📋
I don't know about you, but I find myself copying and pasting a lot of text throughout the day.

Clipboard managers are tools that store a history of items you've copied to the clipboard, allowing you to paste them later. This can be useful when you need to copy multiple items or refer back to something you copied earlier. Some popular clipboard managers include [Alfred](https://www.alfredapp.com/) (as mentioned above) and [CopyClip](https://apps.apple.com/us/app/copyclip-clipboard-history/id595191960?mt=12).

### Notes 🗒️
I find it helpful to keep a digital notebook for jotting down ideas, code snippets, or other information. This can be a simple text file, the build-in Notes app, or a dedicated note-taking app like [Notion](https://www.notion.so/).

Do you ever find yourself needing to ask a question more than once because you forgot the answer?  I do.  Having a place to jot down notes can help you remember important information and save your time and potentially others' time in the long run.

💡 Tip: Use keyboard shortcuts to quickly open your notes app, create new notes, and search for existing notes.



## Conclusion

Efficiency in computer programming is not just about writing code faster; it's about optimizing your entire workflow to save time and reduce errors. By improving your typing speed, mastering the command line, learning keyboard shortcuts, and utilizing IDE features, you can become a more productive and effective programmer.

Remember, efficiency is a journey, not a destination. Continuously seek ways to streamline your workflow and incorporate new tools and techniques to boost your productivity.

Something something Rome wasn't built in a day...

Happy coding!
