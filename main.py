def on_button_pressed_a():
    for index in range(6):
        basic.pause(200)
input.on_button_pressed(Button.A, on_button_pressed_a)
