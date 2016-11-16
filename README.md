# discourse-yuml
Add ability to write yUML class diagrams directly into a discourse post.

![Example of yUML diagram in discourse](https://raw.githubusercontent.com/sekhat/discourse-yuml/master/docs/Example.png)

## Installation

### Docker

To install in docker, add the following to your app.yml in the plugins section:

```
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/sekhat/discourse-yuml.git
```

and rebuild docker via

```
cd /var/discourse
./launcher rebuild app
```

### Manual

From your main discourse do:

    cd plugins
    git clone https://github.com/sekhat/discourse-yuml.git
    cd ..

### Rebake Posts

    rake posts:rebake

## Limitations
Currently, it only supports yUML class diagrams.

## Usage
A yUML diagram can be specified as so

    [yuml]
    [Class] -> [AnotherClass]
    [/yuml]

Which should give you a diagram like so

![Picture of post editor with example](https://raw.githubusercontent.com/sekhat/discourse-yuml/master/docs/ExampleUsage.png)

