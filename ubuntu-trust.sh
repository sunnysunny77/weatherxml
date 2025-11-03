#!/bin/bash
set -euo pipefail

# Load environment variables
source "$INIT_CWD/.env"

# Check that CN is set
if [ -z "${CN:-}" ]; then
    echo "ERROR: CN is not set in .env"
    exit 1
fi

certfile="$INIT_CWD/certs/ca.crt"
certname="$CN Root CA"

echo "Installing system-wide certificate..."
sudo cp "$certfile" /usr/local/share/ca-certificates/"$CN.crt"
sudo update-ca-certificates

# Verify system-wide install
if grep -iq "$CN" /etc/ssl/certs/ca-certificates.crt; then
    echo "System-wide certificate installed: $CN"
else
    echo "System-wide certificate may not be installed properly."
fi

echo "Installing user NSS DB certificate (~/.pki/nssdb)..."
mkdir -p "$HOME/.pki/nssdb"
certutil -A -n "$certname" -t "TCu,Cu,Tu" -i "$certfile" -d sql:"$HOME/.pki/nssdb"

# Verify user NSS DB
echo "Listing certificates in user NSS DB:"
certutil -L -d sql:"$HOME/.pki/nssdb" | grep -i "$CN" || echo "Certificate not found in NSS DB"

echo "Done. Firefox/Chromium will trust $CN Root CA after restart."
