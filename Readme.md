# Docker Image build
docker build -t avi_ecr:demo-ver1 .
docker images
docker images -al

# remove docker image
docker image rm <imageID>

# Docker local directory mapped to remote external folder (virtual directory in docker)
# docker run -it -p <docker port>:<Service port> -v=<remote source>:/images <repo name>:<tag>
docker run -it -p 49160:3000 -v=/Users/avi/DockerHostVolume:/images avi_ecr:demo-ver1

docker ps -l

# stop container
docker stop <containerID>

# remove container
docker rm <container ID>

# volume listing
docker volume list
docker volume inspect <voume id>

#----- AWS ------
#Get AWS Cli

> mkdir aws_cli
> cd aws_cli

> nano AwsCli_install_config.xml

> curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
> installer -pkg AWSCLIV2.pkg -target CurrentUserHomeDirectory -applyChoiceChangesXML AwsCli_install_config.xml

> sudo ln -s /users/avikal/poc/AwsCli/aws-cli/aws /usr/local/bin/aws
> sudo ln -s /users/avikal/poc/aws-cli/aws_completer /usr/local/bin/aws_completer

> which aws
> aws --version
> aws configure
#-----------------------

# ECR : Authenticate
aws ecr get-login-password --region <us-west-1 region> | docker login --username AWS --password-stdin <AWS ID1111111222.dkr.ecr.<region>.amazonaws.com>

docker tag avi_ecr:latest <AWS ID1111111222.dkr.ecr.<region>.amazonaws.com>/avi_ecr:latest
docker push <AWS ID1111111222.dkr.ecr.<region>.amazonaws.com>/avi_ecr:latest