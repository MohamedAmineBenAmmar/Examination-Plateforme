# React Google Login Example

Disclaimer: This is not an official Google product.

## Objectives
* Build a React application and deploy it on Firebase hosting.
* Build a backend API service and deploy it on Cloud Run.

* The React application uses Firebase libraries to authenticate users with thier Google Account, and call the backend API using an ID token generated by Firebase.
* The backend API service validates the ID token so that only users who logged-in to the application can use the backend API.

## Note on Cross-Origin Resource Sharing (CORS) restriction
By default, CORS is not allowed on Cloud Run. It's possible to configure your backend application to allow CORS explicitly. For example, you can use [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/) for Flask applications. In this tutorial, you use the URL rewrites feature of Firebase hosting
to avoid the CORS restriction. With this feature, Firebase hosting can act as a proxy gateway to the backend services running on Cloud Run.

## References
* Firebase: [Authenticate Using Google with JavaScript](https://firebase.google.com/docs/auth/web/google-signin)
* Firebase: [Serve dynamic content and host microservices with Cloud Run](https://firebase.google.com/docs/hosting/cloud-run)
* Cloud Run: [Authenticating users](https://cloud.google.com/run/docs/authenticating/end-users)

## Do this first
1. Create a new Google Cloud project from [Cloud Console](https://console.cloud.google.com).
1. Add the project to Firebase from [Firebase Console](https://console.firebase.google.com).
1. Add Firebase application from **Project Overview** -> **Project settings** menu. (Click the `</>` icon at the bottom of the page.)
 - Specify **App nickname** as you like.
 - Check **Also setup Firebase Hosting for this app**
 - Click **Register App**
 - Copy the contents of `const firebaseConfig` on your editor.
 - Click **Next**
 - Click **Next**
 - Click **Continue to console**
4. Enable the "Google" sign-in provider from **Build** -> **Authentication** menu.
 - Clock **Get started**
 - Click **Google** button from **Additional providers**
 - Move **Enable** slider.
 - Select **Project support email**
 - Click **Save**

## Setup

### Enable APIs and clone the repository.

1. Open Cloud Shell from Cloud Console.

2. Run the following commands.
```
PROJECT_ID=[your project ID]
gcloud config set project $PROJECT_ID
gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com
cd $HOME
git clone https://github.com/enakai00/react-google-login-example.git
```

### Build and deply the backend API service.

1. Run the following commands.
```
cd $HOME/react-google-login-example/backend-example
gcloud builds submit --tag gcr.io/$PROJECT_ID/hello-world-service
gcloud run deploy hello-world-service \
  --image gcr.io/$PROJECT_ID/hello-world-service \
  --platform=managed --region=us-central1 \
  --allow-unauthenticated
```

**Note**: you need a user ID token generated by Firebase to use this backend API. As in the following example, arbitrary ID tokens are rejected.
```
SERVICE_NAME="hello-world-service"
SERVICE_URL=$(gcloud run services list --platform managed \
  --format="table[no-heading](URL)" --filter="metadata.name:${SERVICE_NAME}")
curl -X POST -H "Authorization: Bearer $(gcloud auth print-identity-token)" \
  -H "Content-Type: application/json" \
  -d '{"name":"Google Cloud"}' \
  -s ${SERVICE_URL}/hello-world-service/api/v1/hello 
--- output ---
Error with authentication: Firebase ID token has incorrect "aud" (audience) claim....
```

### Build React Application.

1. Move to the application directory.
```
cd $HOME/react-google-login-example/
```

2. Overwrite the Firebase configuration `const firebaseConfig` in `src/Firebase.js` with the contents that you copied in the previous step.

3. Run the following commands.
```
nvm install 16.10.0
yarn install
yarn build
```

### Deploy the application on Firebase hosting.

1. Run the following commands.
```
npm install -g firebase-tools
firebase init hosting
```
- Answer the questions as below:
```
? What do you want to use as your public directory? (public) build
? Configure as a single-page app (rewrite all urls to /index.html)? N
? Set up automatic builds and deploys with GitHub? N
? File build/index.html already exists. Overwrite? N
```

2. Modify `firebase.json` as below.
```
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "/hello-world-service/**",
        "run": {
          "serviceId": "hello-world-service",
          "region": "us-central1"
        }
      }
    ]
  }
}
```

3. Run the following command.
```
firebase use $PROJECT_ID
firebase deploy
```

Now you see the **Hosting URL** in the output. Open the URL with your browser to test the application.

![screenshot](/doc/img/screenshot.png)