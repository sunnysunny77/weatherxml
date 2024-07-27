source $INIT_CWD/.env

sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain $INIT_CWD/certs/ca.crt 

echo "127.0.0.1 $CN" | sudo tee -a /etc/hosts