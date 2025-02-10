
    const schema = {
  "asyncapi": "2.6.0",
  "info": {
    "title": "Premium Contract Event API",
    "version": "1.0.0",
    "description": "Diese API beschreibt das Kafka-Event PREMIUM_CONTRACT_CREATED, \ndas iCON digital sendet, um Infohub über die Erstellung eines Premium-Vertrags zu informieren.\n"
  },
  "servers": {
    "production": {
      "url": "kafka-broker:9092",
      "protocol": "kafka"
    }
  },
  "channels": {
    "premium.contract.created": {
      "description": "Kafka-Topic für Premium Contract Creation Events",
      "subscribe": {
        "summary": "Infohub empfängt Benachrichtigungen über erstellte Premium-Verträge.",
        "message": {
          "payload": {
            "type": "object",
            "properties": {
              "contractStatus": {
                "type": "string",
                "example": "active",
                "description": "Status des Vertrags",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "contractStartDate": {
                "type": "string",
                "format": "date",
                "description": "Startdatum des Vertrags",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "contractId": {
                "type": "string",
                "description": "Eindeutige Vertrags-ID",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "fleetId": {
                "type": "string",
                "description": "Flotten-ID",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "documentInfo": {
                "type": "string",
                "format": "uri",
                "description": "Link zum Vertragsdokument",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "ucid": {
                "type": "string",
                "description": "UCID des Vertrags",
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "language": {
                "type": "string",
                "description": "Sprache und Markt des Vertrags, z.B. 'it-CH'",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "templateRelease": {
                "type": "string",
                "description": "Vertragsversion im Format (legal/release).(typo/version)",
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "requestId": {
                "type": "string",
                "description": "Eindeutige Request-ID",
                "x-parser-schema-id": "<anonymous-schema-10>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-message-name": "PremiumContractCreatedEvent"
        }
      }
    }
  },
  "components": {
    "messages": {
      "PremiumContractCreatedEvent": "$ref:$.channels.premium.contract.created.subscribe.message"
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  