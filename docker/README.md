# Neo4j Docker instance

For more information, visit the official [Neo4j documentation](https://neo4j.com/docs/operations-manual/current/docker/)

## Installation

### Pull images

```
docker-compose pull
```

## Usage

### Load dump database

Load the dump_example.dump in the database.

> [!IMPORTANT]
> For the Community edition, this step needs to be done before starting the database container for the first time.
> Do not forget to modify the default database in `/conf/neo4j.conf`
> Make sure the directory _data_ is present in the docker root directory.

```
docker run --interactive --tty --rm --volume=./data:/data neo4j/neo4j-admin:latest neo4j-admin database load dump_example --from-path=/data
```

> [!NNOTE]
> For more information, visit the official [Neo4j documentation](https://neo4j.com/docs/operations-manual/current/docker/dump-load/)

### Load CSV database

Load the csv_example.csv in the database.

```
docker run --interactive --tty --rm --volume=./data:/data neo4j/neo4j-admin:latest neo4j-admin database import csv_example --from-path=/data
```

### Start Neo4j database container

> [!IMPORTANT]
> Make sure the directories _conf_, _data_ and _logs_ are present in the docker root directory.

```
docker-compose up neo4j
```
