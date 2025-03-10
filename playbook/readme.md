ansible-playbook -i 'remote_host,' playbook.yml --extra-vars "ansible_user=your_user ansible_ssh_pass=your_pass" --become --become-method=su --ask-become-pass
# Перед вводом команды заменить remote_host на ip адрес хоста, где будет выполнятся плейбук, your_user заменить на имя пользователя от которого будет выполнятся плейбук, your_pass на пароль пользователя. 
# После выполнения команды потребуется ввести root пароль сервера, где выполянется плейбук.
