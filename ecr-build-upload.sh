#!/bin/bash

NAME=uflower
VERSION=0.1.0
PORT=3000
PEM_FILE="$HOME/OneDrive/Projects/needsfor/aws/needsfor.pem"
ACCOUNT_ID=905418488573

echo "$(date '+%Y-%m-%d %H:%M:%S')" > "./public/version.txt"

docker build -t $NAME:$VERSION ./

aws --profile needsfordev ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.ap-northeast-2.amazonaws.com
docker tag $NAME:$VERSION $ACCOUNT_ID.dkr.ecr.ap-northeast-2.amazonaws.com/$NAME:$VERSION
docker push $ACCOUNT_ID.dkr.ecr.ap-northeast-2.amazonaws.com/$NAME:$VERSION

# echo "---------------------------------------------------------"
# echo "Deploying..."
# echo "---------------------------------------------------------"
ssh -i $PEM_FILE ec2-user@hass.co.kr "sudo ~root/redeploy-docker.sh $NAME $VERSION $PORT $ACCOUNT_ID"

# echo "---------------------------------------------------------"
# echo "Complete deploy."
# echo "---------------------------------------------------------"