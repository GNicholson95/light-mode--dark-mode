# light-mode--dark-mode
*The toggleTheme function checks the current theme by accessing the data-theme attribute of the documentElement. 
If the current theme is set to "dark", it changes the theme to "light" by updating the data-theme attribute and unchecking the toggle switch. 
It also updates the styles of the nav, textBox, and toggleIcon elements, as well as the sources of the images, to reflect the light mode.

*If the current theme is set to "light", it changes the theme to "dark" by updating the data-theme attribute and checking the toggle switch. 
It also updates the styles of the nav, textBox, and toggleIcon elements, as well as the sources of the images, to reflect the dark mode.

*The code also checks the local storage for a stored theme. 
If a theme is found, it sets the data-theme attribute accordingly and updates the toggle switch and styles to match the stored theme.

Overall, the code allows users to toggle between dark mode and light mode on the web page, with the selected theme persisting even after page refreshes.
