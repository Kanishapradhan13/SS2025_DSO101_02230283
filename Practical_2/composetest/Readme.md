# Docker Compose Implementation Guide

## Introduction

The implementation creates a Python Flask application with Redis for counting page views, demonstrating how Docker Compose manages multi-container applications.

### Build and run the app with Compose

![alt text](app.png)

- refresh the page

![alt text](app2.png)

![alt text](imagels.png)

![alt text](dockerdown.png)

### Re-build and run the app with Watch Compose

![alt text](watch.png)

![alt text](4times.png)

### split up the services using multiple Compose files

- infra.yaml
- compose.yaml

![alt text](2compose.png)

### Experiment with some other command

``` docker compose up -d ```

![alt text](up-d.png)

``` docker compose stop/ down ```

![alt text](dockerdown2.png)
