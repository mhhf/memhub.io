#!/bin/sh
set -x

export METEOR_WAREHOUSE_URLBASE=https://d3fm2vapipm3k9.cloudfront.net
rm -fR node_modules
cat package.json
meteor npm install
mkdir .build
meteor build --architecture=os.linux.x86_64 .build
# docker-compose ps
docker-compose stop web
ssh -i ~/.ssh/id_memhub root@159.203.96.25 rm -fR /bundle/*
scp -i ~/.ssh/id_memhub .build/memhub.io.tar.gz root@159.203.96.25:/bundle
# ~/docker-machine scp -r .build/dapphub.io.tar.gz $MACHINE_INSTANCE:/bundle
docker-compose up -d web
# ssh -i ~/.ssh/id_dapphub root@104.236.215.91 docker stop web
# ssh -i ~/.ssh/id_dapphub root@104.236.215.91 docker up -d web
# rm -fR .build
