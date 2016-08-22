# Coding-Dojo: Blockchain

Zum Coding-Dojo nehmen wir uns dieses Jahr das Thema Blockchain vor.

## Presentation

Wie jedes Jahr brauchen wir noch eine Presenation, um unsere Idee vorzustellen und die Ziele zu stecken. Die liegt direkt hier im Repo unter [index.html](index.html). Wer das Repo ausgecheckt hat, kann sie auch offline bearbeiten und anschauen. Die Folien sind werden in [Markdown](https://daringfireball.net/projects/markdown/basics) geschrieben und mit `---` voneinander getrennt. Das Rendering übernimmt [Remark.js](http://remarkjs.com/#1), weil es vergelichsweise einfach ist.

Der letzte Stand kann auch online unter [https://cofinpro.github.io/dojo-blockchain/#1](https://cofinpro.github.io/dojo-blockchain/) angeschaut werden.

## Vagrant

Um das Setup zu beschleunigen gibt's eine Vagrant-VM. Besorgt euch [Vagrant](https://www.vagrantup.com) und [Virtualbox](https://www.virtualbox.org). Dann wechselt in einem Terminal in das Verzeichnis `vagrant` und gebt folgenes ein.

```sh
vagrant plugin install vagrant-vbguest
vagrant up --provider=virtualbox
```

Auf die Commandline der VM kommt ihr mit `vagrant ssh`.

Anschließend läuft die Multichain-RPC-API auf [http://localhost:4250](http://localhost:4250) und der Multichain-Explorer auf [http://localhost:2750](http://localhost:2750).

Die Credentials für die API sind:
* User: multichainrpc
* Pass: cofinpro

Alle Daten und Logs landen im `multichaini`-Verzeichnis auf dem Host, so dass ihr sie auch außerhalb der VM betrachten könnt.

## Links

* [Multichain](http://www.multichain.com)
* [Multichain API](http://www.multichain.com/developers/json-rpc-api/)
* [Multichain-Explorer](https://github.com/MultiChain/multichain-explorer)
