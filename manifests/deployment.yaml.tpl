apiVersion: apps/v1
kind: Deployment
metadata:
  name: prototype
  labels:
    app: prototype
    app.kubernetes.io/name: prototype
spec:
  selector:
    matchLabels:
      app: prototype
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 0
      maxUnavailable: 1
  template:
    metadata:
      labels:
        app: prototype
    spec:
      containers:
        - name: prototype
          image: europe-docker.pkg.dev/dft-rsss-findtransptdata-dev/dft-nap/prototypes:COMMIT_SHA
          resources:
            limits:
               #memory: 512Mi
               #cpu: 750m
            requests:
               #memory: 128Mi
               #cpu: 500m
          ports:
           - name: prototype-app
             containerPort: 3000
             protocol: TCP
          volumeMounts:
          - name: proto-pvc
            mountPath: /src/app
            readOnly: false
      volumes:
        - name: proto-pvc
          persistentVolumeClaim:
            claimName: proto-pvc
