# ARTICOM: AI-Powered Product Visual Optimization and Content Management

ARTICOM is an AI-powered platform designed to optimize product visuals and generate effective content for e-commerce. Combining technologies like **Stable Diffusion**, **ControlNet**, and the **MERN Stack** (MongoDB, Express.js, React, Node.js), ARTICOM helps users create visually appealing, high-quality product presentations.

---

## Demo Video

[![ARTICOM Demo Video](http://img.youtube.com/vi/kfcDh89I4D8/0.jpg)](https://youtu.be/kfcDh89I4D8)

---

## About the Project

ARTICOM automatically removes backgrounds, enhances product images with AI, and generates SEO-optimized product titles and descriptions. It empowers e-commerce sellers to present their products in a clean, professional, and engaging way.

---

## Key Features

1.  Visual Optimization**
   - AI-powered background removal
   - Realistic background generation using Stable Diffusion + ControlNet

2.  Content Generation**
   - GPT-3.5-based SEO-friendly product titles and descriptions
   - Instant text creation based on product and theme

3.  User-Friendly Experience**
   - Modern responsive UI with React + TailwindCSS

4.  Export and Sharing**
   - Download and share generated visuals across platforms

---

## Tech Stack

| Layer             | Technologies                                 |
|------------------|----------------------------------------------|
| **Frontend**      | React, TailwindCSS, Swiper.js                |
| **Backend**       | Node.js, Express.js, Mongoose                |
| **AI API Module** | FastAPI, Stable Diffusion, ControlNet        |
| **Database**      | MongoDB                                      |

---

## Installation

1. **Clone the Repository**

2. **Install Dependencies**

```bash
# Client
cd client
npm install

# Server
cd ../server
npm install

# Python AI API
cd ../pyapi_module
pip install -r requirements.txt
```

3. **Set Environment Variables**
- `client/.env`: `VITE_BACKEND_URL`, `VITE_CLERK_PUBLISHABLE_KEY`, etc.
- `server/.env`: `MONGODB_URI`, `OPENAI_API_KEY`, `HUGGINGFACE_TOKEN`, etc.
- `pyapi_module/.env`: `HUGGINGFACE_TOKEN`, etc.

4. **Run the Application**
```bash
# Client
cd client
npm run dev

# Server
cd ../server
npm run server

# Python API
cd ../pyapi_module
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

5. **Access the App**
- Frontend: [http://localhost:5173](http://localhost:5173)
- Node.js API: [http://localhost:3000](http://localhost:3000)
- FastAPI Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## Example API Endpoints

### `/api/ai/scenario` (POST)
- Handles image cleaning, inpainting, and text generation.
- **Input**: `image`, `productDescription`, `backgroundDescription`
- **Output**: JSON with generated images, title, and description.

### `/generateImages` (POST)
- Python-side API to generate images with ControlNet.
```json
{
  "prompt": "Prompt text",
  "negative_prompt": "Negative prompt",
  "image_base64": "base64 string",
  "num_images": 2
}
```
- **Output**:
```json
{
  "images": ["base64 image 1", "base64 image 2"]
}
```

---

## DevOps & CI/CD
- CI: GitHub Actions runs lint + unit tests on push (client + server).
- Containerization: Dockerfiles for client and server; docker-compose for local dev.
- Deploy: one-click to Render/Heroku/Fly.io; artifacts built in CI and pushed as images.

### Run with Docker
docker compose up --build

### Environment
Copy .env.example to:
- client/.env: VITE_BACKEND_URL, VITE_CLERK_PUBLISHABLE_KEY
- server/.env: MONGODB_URI, OPENAI_API_KEY, HUGGINGFACE_TOKEN

