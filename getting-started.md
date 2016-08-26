# Einer startet die kette

```shell
multichain-util create cofinpro
multichaind cofinpro daemon
```

Dann steht auf der Shell der Port

```shell
MultiChain Core Daemon build 1.0 alpha 23 protocol 10005

New users can connect to this node using
multichaind cofinpro@10.0.2.15:7443
```

# Gegen eine Chain verbinden

Alle anderen connecten gegen eine Chain:

```shell
multichaind cofinpro@10.42.0.97:6815
```

Das wird beim ersten Mal nicht klappen, da unsere Chain privat ist. Auf der Shell tauchen die Kommandos auf,
die der Admin absetzten muss:

```shell
multichain-cli cofinpro grant 1Z8mBjdtUQ2VYj9ohMBLVEnWN7aiiM8ba2e7hL connect
multichain-cli cofinpro grant 1Z8mBjdtUQ2VYj9ohMBLVEnWN7aiiM8ba2e7hL connect,send,receive
```


Danach sollte das erste Kommando klappen:
```shell
multichaind cofinpro@10.42.0.97:6815
```


