# Expertise Finder

## Installation

### Pull images

```
docker-compose pull
```

## Usage

### Start Neo4j database container

```
docker-compose up neo4j
```

### Load dump database

```
docker run --interactive --tty --rm --volume=./data:/data neo4j/neo4j-admin:latest neo4j-admin database load recommendations --from-path=/data
```

> For the Community edition, this step needs to be done before starting the database container for the first time.

### Load CSV database

```
docker run --interactive --tty --rm --volume=./data:/data neo4j/neo4j-admin:latest neo4j-admin database import recommendations --from-path=/data
```
