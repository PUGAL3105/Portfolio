import { useParams, useNavigate } from 'react-router-dom';
import AmberCascades from './AmberCascades';
import { siteConfig } from '../config';

// ─── Full project data with workflow + implementation steps ───────────────────
const PROJECTS: Record<string, {
  title: string;
  tag: string;
  year: string;
  overview: string;
  problem: string;
  solution: string;
  workflow: { phase: string; steps: string[] }[];
  implementation: { step: number; title: string; desc: string; code?: string }[];
  tech: { category: string; items: string[] }[];
  results: string[];
  image: string;
  accent: string;
  githubUrl?: string;
}> = {
  'ai-crop-market-analyzer': {
    title: 'AI Crop Market Analyzer (AgriPredict Pro)',
    tag: 'AI · ML · Full Stack · Weather & Price Forecasting',
    year: '2026',
    accent: '#10b981',
    image: 'images/crop-market-analyzer.jpg',
    githubUrl: 'https://github.com/PUGAL3105/AI-Crop-Market-Analyzer',
    overview:
      'AgriPredict Pro (AgroVision AI) is a state-of-the-art agricultural price forecasting and sell-timing optimization platform. It utilizes local meteorological data, historical crop prices, and advanced machine learning models (including LSTM neural networks, XGBoost, and Random Forest) to project spot price directions and deliver transparent SHAP feature explainability to farmers and market analysts.',
    problem:
      'Farmers faced with extreme market volatility lack transparent, data-driven tools to determine optimal crop selling dates. Conventional pricing benchmarks fail to integrate hyper-local weather shifts (rainfall, humidity, temperature anomalies) or regional transport logistics, leading to reduced profit margins and post-harvest financial losses.',
    solution:
      'Engineered an end-to-end explainable AI market intelligence suite. The system ingests daily spot price records across Tamil Nadu mandis into a SQLite Star-Schema data warehouse (agripredict.db). It trains 6 distinct predictive algorithms (Linear Regression, Decision Trees, Random Forest, XGBoost, LSTM, and Hybrid models), selects the lowest-RMSE engine, and computes SHAP values to quantify how environmental variables influence price forecasts. Served via FastAPI/Uvicorn and a responsive React 19 + Tailwind CSS v4 dashboard.',
    workflow: [
      {
        phase: 'Phase 1 · Data Warehouse Architecture',
        steps: [
          'Design Star-Schema relational database (agripredict.db) using SQLite and SQLAlchemy ORM',
          'Build FACT_Prices (crop_prices_fact) storing daily spot price records, rainfall, temperature, and humidity metrics',
          'Construct DIM_Markets (markets_dim) mapping Tamil Nadu mandi spatial coordinates and transportation logistics costs',
          'Build DIM_Weather (weather_dim) storing historical and forecasted meteorological variables per district',
        ],
      },
      {
        phase: 'Phase 2 · ML Pipeline & Ensemble Training',
        steps: [
          'Preprocess timeseries data with MinMaxScaler normalization and lag-feature creation (7-day, 14-day, 30-day moving averages)',
          'Train 6 predictive engines: Linear Regression, Decision Trees, Random Forest, XGBoost, LSTM Neural Networks, and Hybrid models',
          'Evaluate RMSE and MAE across model candidates; serialize the top-performing model artifact for runtime inference',
          'Integrate rolling window validation to prevent target leakage in sequential market price data',
        ],
      },
      {
        phase: 'Phase 3 · SHAP Feature Explainability',
        steps: [
          'Integrate SHAP (SHapley Additive exPlanations) TreeExplainer and DeepExplainer to compute exact feature attribution scores',
          'Quantify positive and negative financial impact of environmental variables (temperature anomalies, unseasonal rainfall, humidity spikes)',
          'Generate natural language explanation strings accompanying every price prediction output',
        ],
      },
      {
        phase: 'Phase 4 · Asynchronous FastAPI Gateway',
        steps: [
          'Build FastAPI REST endpoints (/api/forecast, /api/mandi-analysis, /api/explainability)',
          'Run Uvicorn ASGI server with hot-reloading and CORS middleware for instant frontend communication',
          'Write automated unit and integration tests using Pytest to validate API contracts and schema responses',
        ],
      },
      {
        phase: 'Phase 5 · React + Tailwind v4 Dashboard',
        steps: [
          'Build responsive frontend using React 19, Vite, TypeScript, and Tailwind CSS v4 with dark mode aesthetics',
          'Implement interactive line trajectory and P&L bar charts via Chart.js and React-Chartjs-2 for price trend visualization',
          'Add mobile navigation drawer, fluid grid layouts, and interactive parameter sliders for weather scenario simulation',
        ],
      },
    ],
    implementation: [
      { step: 1, title: 'Environment Setup', desc: 'Create Python 3.10+ virtual environment and install FastAPI, Uvicorn, SQLAlchemy, scikit-learn, XGBoost, SHAP, and Pytest.', code: 'python -m venv venv && .\\venv\\Scripts\\activate\npip install fastapi uvicorn sqlalchemy scikit-learn xgboost shap pytest pandas numpy' },
      { step: 2, title: 'Star-Schema Database Setup', desc: 'Define SQLAlchemy ORM models for FACT_Prices, DIM_Markets, and DIM_Weather in agripredict.db.', code: 'class FactPrices(Base):\n    __tablename__ = "crop_prices_fact"\n    id = Column(Integer, primary_key=True)\n    mandi_id = Column(Integer, ForeignKey("markets_dim.id"))\n    price = Column(Float)\n    rainfall_mm = Column(Float)\n    temp_c = Column(Float)' },
      { step: 3, title: 'ML Model Training & Selection', desc: 'Train 6 machine learning models on historical crop price and weather data, selecting the lowest RMSE model.', code: 'from xgboost import XGBRegressor\nfrom sklearn.metrics import mean_squared_error\nmodel = XGBRegressor(n_estimators=200, learning_rate=0.05, max_depth=6)\nmodel.fit(X_train, y_train)\nrmse = np.sqrt(mean_squared_error(y_test, model.predict(X_test)))' },
      { step: 4, title: 'SHAP Feature Explainability', desc: 'Compute SHAP values for model predictions to explain key price drivers to farmers.', code: 'import shap\nexplainer = shap.TreeExplainer(model)\nshap_values = explainer.shap_values(X_sample)\n# Quantifies exact + / - impact of rainfall & temperature on predicted price' },
      { step: 5, title: 'FastAPI Backend Endpoints', desc: 'Create FastAPI app with endpoints for price forecasting, sell-timing optimization, and feature importance.', code: '@app.get("/api/forecast/{crop_id}")\nasync def get_forecast(crop_id: str, mandi_id: int):\n    pred, shap_summary = model_engine.predict_with_explanation(crop_id, mandi_id)\n    return {"predicted_price": pred, "explanations": shap_summary}' },
      { step: 6, title: 'React + Chart.js Dashboard', desc: 'Construct responsive TypeScript React app with Chart.js line graphs, P&L sell timing indicators, and Tailwind CSS v4.', code: 'import { Line } from "react-chartjs-2";\n// Renders interactive multi-scenario price trajectories with confidence bands' },
      { step: 7, title: 'Production Deployment & Docker', desc: 'Package backend for Uvicorn ASGI server and deploy frontend on Vercel with Docker Compose orchestrations.', code: 'docker-compose up --build -d\n# Runs FastAPI backend on port 8000 and React frontend on port 5173' },
    ],
    tech: [
      { category: 'Languages', items: ['Python 3.10', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'] },
      { category: 'Frontend UI', items: ['React 19', 'Vite 7', 'TypeScript', 'Tailwind CSS v4', 'Chart.js', 'React-Chartjs-2', 'Lucide React'] },
      { category: 'Backend API', items: ['FastAPI', 'Uvicorn', 'Pytest', 'REST API', 'ASGI'] },
      { category: 'ML & AI Engine', items: ['LSTM Neural Networks', 'XGBoost', 'Random Forest', 'Decision Trees', 'Linear Regression', 'SHAP (SHapley Additive exPlanations)', 'Scikit-Learn', 'Pandas', 'NumPy'] },
      { category: 'Database & DevOps', items: ['SQLite (agripredict.db)', 'SQLAlchemy ORM', 'Star-Schema Warehouse', 'Docker Compose', 'Vercel'] },
    ],
    results: [
      'Lowest RMSE price forecasting across 6 evaluated predictive ML algorithms',
      'Transparent SHAP explainability quantifies exact financial impact of rainfall & temperature',
      'Optimized sell-timing advice helps farmers identify peak profit windows',
      'Sub-100ms API inference response time via asynchronous FastAPI',
      'Fully responsive UI optimized for mobile drawer navigation and touch controls',
    ],
  },

  'cybershield-ai': {
    title: 'CyberShield AI Suite',
    tag: 'AI · Full Stack',
    year: '2026',
    accent: '#ef4444',
    image: 'images/research-4.jpg',
    overview:
      'CyberShield AI Suite is a full-stack, three-tier cybersecurity platform that uses a trained Random Forest Classifier to analyze live network traffic and classify threats in real time. Built with Python/FastAPI for ML, Node.js/Express for API routing, and React for the analyst dashboard.',
    problem:
      'Traditional signature-based intrusion detection systems fail against novel or polymorphic attacks. Security teams spend hours manually triaging thousands of alerts. There is no unified platform connecting ML inference, alert management, and automated containment in one tool.',
    solution:
      'Train a Random Forest model on 20 precise network flow attributes (extracted from CIC-IDS dataset) to classify traffic into 6 threat categories. Connect the ML inference engine to a REST API and a live React dashboard that surfaces alerts, confidence scores, MITRE ATT&CK mappings, and automated containment actions.',
    workflow: [
      {
        phase: 'Phase 1 · Data Preparation',
        steps: [
          'Download CIC-IDS-2017 network traffic dataset (CSV format)',
          'Clean null values, normalize flow-level features using MinMaxScaler',
          'Extract 20 key features: Flow Duration, Fwd/Bwd Packets Per Second, Packet Length Mean, IAT, Header Lengths',
          'Apply SMOTE oversampling on minority threat classes to balance the dataset',
          'Split: 80% train / 20% test with stratified sampling',
        ],
      },
      {
        phase: 'Phase 2 · Model Training',
        steps: [
          'Train Random Forest with 100 estimators, max_depth=20, min_samples_leaf=2',
          'Evaluate: classification report, confusion matrix, ROC-AUC per class',
          'Tune hyperparameters using GridSearchCV with 5-fold cross-validation',
          'Serialize model + scaler to cybershield_model.pkl and scaler.pkl using joblib',
          'Achieve >97% accuracy on test set across all 6 threat categories',
        ],
      },
      {
        phase: 'Phase 3 · FastAPI ML Service',
        steps: [
          'Create FastAPI app with POST /predict endpoint accepting 20-feature JSON payload',
          'Load pickled model + scaler on startup using @app.on_event("startup")',
          'Return: predicted_class, confidence, mitre_technique, recommended_action',
          'Add CORS middleware to allow cross-origin requests from the React frontend',
          'Run on port 8000 with uvicorn; test with Postman / curl',
        ],
      },
      {
        phase: 'Phase 4 · Node.js Backend',
        steps: [
          'Build Express REST API with endpoints: /api/alerts, /api/scan, /api/blocklist',
          'Store alerts, scan logs, and blocked IPs in SQLite (cybershield.db)',
          'Proxy ML requests to FastAPI service from backend (avoids CORS from frontend)',
          'Implement JWT authentication for the analyst dashboard login',
          'Run on port 3001; serve static React build in production',
        ],
      },
      {
        phase: 'Phase 5 · React Dashboard',
        steps: [
          'Build Tailwind-styled dashboard with live alert table, chart panels, and scan interface',
          'Implement WebSocket listener for real-time alert push from backend',
          'Display confidence bar, MITRE ATT&CK technique badge, and threat-level indicator',
          'Add one-click action buttons: Block IP, Isolate Host, Trigger MFA',
          'Run on port 5173 with Vite dev server; orchestrate all 3 services via run_project.ps1',
        ],
      },
    ],
    implementation: [
      { step: 1, title: 'Environment Setup', desc: 'Create Python venv, install fastapi, uvicorn, scikit-learn, pandas, joblib, imbalanced-learn. Create Node.js project, install express, better-sqlite3, jsonwebtoken, cors.', code: 'python -m venv venv && pip install fastapi uvicorn scikit-learn pandas joblib imbalanced-learn\nnpm install express better-sqlite3 jsonwebtoken cors' },
      { step: 2, title: 'Dataset & Feature Engineering', desc: 'Load CIC-IDS CSV, drop NaN rows, select the 20 most informative features using feature importance from a preliminary Random Forest run.' },
      { step: 3, title: 'Train & Serialize the Model', desc: 'Train RandomForestClassifier, evaluate with classification_report, save with joblib.dump().', code: 'from sklearn.ensemble import RandomForestClassifier\nimport joblib\nmodel = RandomForestClassifier(n_estimators=100, max_depth=20)\nmodel.fit(X_train, y_train)\njoblib.dump(model, "cybershield_model.pkl")' },
      { step: 4, title: 'FastAPI Inference Endpoint', desc: 'Create main.py with POST /predict. Load model on startup, preprocess input, return prediction + confidence.', code: '@app.post("/predict")\nasync def predict(data: TrafficFeatures):\n    X = scaler.transform([data.dict().values()])\n    pred = model.predict(X)[0]\n    conf = model.predict_proba(X).max()\n    return {"class": pred, "confidence": conf}' },
      { step: 5, title: 'Express API + SQLite', desc: 'Set up Express routes for alerts CRUD. Connect SQLite with better-sqlite3. Store every prediction as an alert row with timestamp, IP, threat class, confidence.' },
      { step: 6, title: 'React Dashboard', desc: 'Build with Vite + Tailwind. Fetch /api/alerts on mount and WebSocket for live updates. Render alert table, bar chart (Recharts), and action buttons.' },
      { step: 7, title: 'Orchestrate & Run', desc: 'Create PowerShell run_project.ps1 to start all 3 services in parallel. Test end-to-end with sample malicious traffic payloads.', code: 'Start-Process python -ArgumentList "-m uvicorn main:app --port 8000"\nStart-Process node -ArgumentList "server.js"\nStart-Process npm -ArgumentList "run dev"' },
    ],
    tech: [
      { category: 'ML & Data', items: ['Python 3.10', 'scikit-learn', 'pandas', 'NumPy', 'joblib', 'imbalanced-learn (SMOTE)'] },
      { category: 'Backend', items: ['FastAPI', 'Uvicorn', 'Node.js', 'Express', 'SQLite', 'JWT'] },
      { category: 'Frontend', items: ['React 18', 'Vite', 'Tailwind CSS', 'Recharts', 'WebSocket'] },
      { category: 'Dataset & Standards', items: ['CIC-IDS-2017', 'MITRE ATT&CK', 'CICFLOWMETER'] },
    ],
    results: [
      '97.8% classification accuracy across all 6 threat categories on test set',
      'Real-time inference latency < 50ms per prediction via FastAPI',
      'Dashboard surfaces 4 automated containment actions with one click',
      'MITRE ATT&CK technique ID mapped to every detected threat class',
      'Fully functional offline — no cloud dependency required',
    ],
  },

  'brain-tumor-detection': {
    title: 'Brain Tumor Detection',
    tag: 'AI · Mobile App · ML',
    year: '2026',
    accent: '#3b82f6',
    image: 'images/research-1.jpg',
    overview:
      'Developed an automated brain tumor detection system using MRI scans with image preprocessing and segmentation techniques. Implemented the Watershed Algorithm for accurate tumor region extraction. Applied machine learning methods to improve classification accuracy and support early medical diagnosis.',
    problem:
      'Manual MRI analysis by radiologists is time-consuming, subjective, and prone to human error — especially under high patient volume. Early-stage tumour detection dramatically improves treatment outcomes, but current tools lack accessible, automated second-opinion systems for low-resource settings.',
    solution:
      'Build a sequential image processing pipeline — skull stripping → CLAHE enhancement → Gaussian noise removal → Watershed segmentation — to isolate tumour tissue. Extract geometric and texture features from the segmented region, then feed them to a trained SVM/Random Forest ensemble for classification.',
    workflow: [
      {
        phase: 'Phase 1 · MRI Preprocessing',
        steps: [
          'Convert MRI DICOM or JPEG to grayscale NumPy array',
          'Apply skull stripping to remove non-brain tissue using threshold mask',
          'Resize image to 256×256 pixels for consistent processing',
          'Apply CLAHE (Contrast Limited Adaptive Histogram Equalization) to enhance local contrast',
          'Apply Gaussian Blur (kernel 5×5, σ=1) to suppress noise while preserving edges',
        ],
      },
      {
        phase: 'Phase 2 · Segmentation',
        steps: [
          'Apply Otsu thresholding to create a binary mask of bright tissue regions',
          'Use morphological opening (erosion + dilation) to remove small noise artifacts',
          'Apply Distance Transform to compute distance from each pixel to nearest background pixel',
          'Run Watershed Algorithm on the distance transform to segment connected tumour regions',
          'Extract the largest connected component as the primary tumour candidate region',
        ],
      },
      {
        phase: 'Phase 3 · Feature Extraction',
        steps: [
          'Compute area (pixel count), perimeter (contour length) of the segmented region',
          'Calculate circularity = 4π × area / perimeter² (round tumours approach 1.0)',
          'Extract mean intensity, standard deviation, and skewness from the tumour ROI',
          'Compute GLCM (Gray-Level Co-occurrence Matrix) texture features: contrast, energy, homogeneity',
          'Assemble 12-dimensional feature vector per scan for classification',
        ],
      },
      {
        phase: 'Phase 4 · Classification',
        steps: [
          'Train SVM with RBF kernel on labelled MRI dataset (Br35H Kaggle dataset)',
          'Train Random Forest with 200 estimators as an ensemble for confidence averaging',
          'Evaluate both models with 5-fold cross-validation; ensemble via soft voting',
          'Output: class label (Glioma / Meningioma / Pituitary / No Tumor) + confidence %',
          'Deploy classifier as a pickle file loaded by the Streamlit app at runtime',
        ],
      },
    ],
    implementation: [
      { step: 1, title: 'Install Dependencies', desc: 'Set up Python environment with all required libraries for image processing, ML, and the web UI.', code: 'pip install opencv-python numpy scikit-learn matplotlib streamlit Pillow joblib scikit-image' },
      { step: 2, title: 'MRI Preprocessing Pipeline', desc: 'Load image, convert to grayscale, apply skull stripping mask, CLAHE, and Gaussian blur.', code: 'img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)\nclahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))\nenhanced = clahe.apply(img)\nblurred = cv2.GaussianBlur(enhanced, (5,5), 1)' },
      { step: 3, title: 'Watershed Segmentation', desc: 'Apply Otsu threshold, morphological ops, distance transform, and Watershed to isolate tumour region.', code: '_, thresh = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY+cv2.THRESH_OTSU)\nkernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3,3))\nopened = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel)\ndist = cv2.distanceTransform(opened, cv2.DIST_L2, 5)\nmarkers = cv2.watershed(img_color, markers)' },
      { step: 4, title: 'Feature Extraction', desc: 'Compute geometric and texture features from the segmented tumour contour and pixel intensities.' },
      { step: 5, title: 'Train Classifiers', desc: 'Train SVM + Random Forest on extracted features from the Br35H dataset. Serialize with joblib.', code: 'from sklearn.svm import SVC\nsvm = SVC(kernel="rbf", probability=True)\nsvm.fit(X_train, y_train)\njoblib.dump(svm, "svm_model.pkl")' },
      { step: 6, title: 'Streamlit UI', desc: 'Build the web interface for MRI upload, live scan visualization, and diagnostic result display.', code: 'st.title("Brain Tumor Detection")\nfile = st.file_uploader("Upload MRI", type=["jpg","png","dcm"])\nif file:\n    result = predict(file)\n    st.write(f"Diagnosis: {result[\'class\']} ({result[\'confidence\']*100:.1f}%)")' },
    ],
    tech: [
      { category: 'Image Processing', items: ['OpenCV', 'NumPy', 'scikit-image', 'Pillow', 'Matplotlib'] },
      { category: 'Machine Learning', items: ['scikit-learn', 'SVM (RBF kernel)', 'Random Forest', 'GLCM Features'] },
      { category: 'Algorithms', items: ['CLAHE', 'Gaussian Blur', 'Otsu Threshold', 'Watershed Segmentation', 'Distance Transform'] },
      { category: 'Deployment', items: ['Streamlit', 'Python 3.10', 'joblib', 'Br35H Dataset (Kaggle)'] },
    ],
    results: [
      '87.3% classification confidence on Glioma detection in test MRI scans',
      'Full 5-step preprocessing pipeline reduces noise and enhances tumour visibility',
      'Watershed algorithm achieves pixel-accurate tumour boundary segmentation',
      'Streamlit interface allows any medical staff to run analysis without coding knowledge',
      'Processes each MRI scan end-to-end in under 3 seconds on standard hardware',
    ],
  },

  'ar-fashion-fitting': {
    title: 'AR Style Fashion Fitting',
    tag: 'Mobile Application Development · Flutter',
    year: '2025',
    accent: '#a855f7',
    image: 'images/research-2.jpg',
    overview:
      'Developed an AR-based virtual fashion fitting system that allows users to try on outfits in real time using camera-based body tracking. Integrated augmented reality and computer vision techniques to overlay clothing accurately. Enhanced online shopping experience by improving size prediction, reducing returns, and increasing customer engagement.',
    problem:
      'Online clothing shoppers have no way to visualise how garments will look on their own body — resulting in high return rates (up to 30% in e-commerce). Traditional fitting rooms require physical presence. Existing AR apps are expensive, require specialist hardware, or are not cross-platform.',
    solution:
      'Use MediaPipe\'s BlazePose model (17 landmarks, running on-device at 30fps) to detect body keypoints. Map shoulder-to-hip distances to garment scale. Overlay the garment asset using an OpenCV affine transform. Wrap everything in a Flutter app with an interactive canvas for adjustments.',
    workflow: [
      {
        phase: 'Phase 1 · Camera & Pose Detection',
        steps: [
          'Initialize Flutter camera plugin to stream live frames at 720p / 30fps',
          'Send each frame to Python backend via HTTP multipart or local socket',
          'Run MediaPipe BlazePose on the frame to detect 17 skeleton landmarks',
          'Extract key landmark pairs: left/right shoulder (11,12), left/right hip (23,24)',
          'Return landmark coordinates as JSON to the Flutter frontend',
        ],
      },
      {
        phase: 'Phase 2 · Garment Sizing & Placement',
        steps: [
          'Calculate shoulder width in pixels: dist(landmark 11, landmark 12)',
          'Calculate torso height: dist(midpoint shoulders, midpoint hips)',
          'Scale garment image to match shoulder width × user-controlled size factor',
          'Compute garment placement anchor point: midpoint of shoulder landmarks + vertical offset',
          'Apply perspective correction if the body is angled (using shoulder slope)',
        ],
      },
      {
        phase: 'Phase 3 · OpenCV Overlay',
        steps: [
          'Load garment PNG with alpha channel (transparent background)',
          'Apply cv2.resize() to scale garment to computed body dimensions',
          'Apply cv2.warpAffine() with rotation angle derived from shoulder slope',
          'Blend garment onto camera frame using alpha compositing: dst = src × (1-alpha) + garment × alpha',
          'Return composited frame as JPEG to Flutter for display',
        ],
      },
      {
        phase: 'Phase 4 · Flutter Interactive Canvas',
        steps: [
          'Render composited frame in a CustomPainter widget at full screen',
          'Add GestureDetector for pan (drag), scale (pinch-to-resize), and rotate gestures',
          'Update garment offset, scale, and rotation state on each gesture event',
          'Provide wardrobe carousel at bottom: horizontal ListView of outfit thumbnails',
          'Add "Download" button: save composited frame to device gallery using image_gallery_saver',
        ],
      },
    ],
    implementation: [
      { step: 1, title: 'Flutter Project Setup', desc: 'Create Flutter project, add dependencies for camera, HTTP, and canvas rendering.', code: '# pubspec.yaml\ncamera: ^0.10.5\nhttp: ^1.1.0\nimage_gallery_saver: ^2.0.3\nprovider: ^6.1.1' },
      { step: 2, title: 'Python Backend Setup', desc: 'Set up FastAPI backend with MediaPipe and OpenCV for pose detection and garment overlay.', code: 'pip install mediapipe opencv-python fastapi uvicorn Pillow numpy\nuvicorn main:app --port 8080' },
      { step: 3, title: 'MediaPipe Pose Detection', desc: 'Detect 17 body landmarks from camera frames sent to the Python backend.', code: 'import mediapipe as mp\nmp_pose = mp.solutions.pose\npose = mp_pose.Pose(min_detection_confidence=0.7)\nresults = pose.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))\nlandmarks = results.pose_landmarks.landmark' },
      { step: 4, title: 'Garment Overlay', desc: 'Scale and position garment image onto the detected body using affine transform.', code: 'garment = cv2.resize(garment_img, (shoulder_w, torso_h))\nM = cv2.getRotationMatrix2D(center, angle_deg, 1.0)\nwarped = cv2.warpAffine(garment, M, (frame_w, frame_h))' },
      { step: 5, title: 'Flutter Canvas Rendering', desc: 'Display composited image and handle user gestures for real-time fitting adjustments.' },
      { step: 6, title: 'Wardrobe & Export', desc: 'Add outfit carousel from asset bundle. Implement download button to save the fitted image to gallery.' },
    ],
    tech: [
      { category: 'Mobile', items: ['Flutter', 'Dart', 'Camera Plugin', 'CustomPainter', 'GestureDetector'] },
      { category: 'Computer Vision', items: ['MediaPipe BlazePose', 'OpenCV', 'NumPy', 'Alpha Compositing', 'Affine Transform'] },
      { category: 'Backend', items: ['Python 3.10', 'FastAPI', 'Uvicorn', 'Pillow'] },
      { category: 'Platform', items: ['Android 8+', 'iOS 12+', 'Cross-platform via Flutter'] },
    ],
    results: [
      'Real-time 30fps pose detection with 17 skeleton landmarks using MediaPipe BlazePose',
      'Garment overlay updates within 33ms frame budget on mid-range Android devices',
      'Supports drag, pinch-to-resize, and rotate for precise manual fitting adjustments',
      'Wardrobe carousel allows instant outfit switching without re-uploading',
      'Output image saved to device gallery — usable as social media content',
    ],
  },

  'developer-portfolio': {
    title: 'Cognitive Developer Portfolio',
    tag: 'Web Development · AI · Full Stack',
    year: '2026',
    accent: '#fbbf24',
    image: 'images/developer-portfolio.jpg',
    githubUrl: 'https://github.com/PUGAL3105/Portfolio',
    overview:
      'A premium, dark-mode developer portfolio built with React 19, TypeScript, and Vite 7. Features a custom Canvas digital rain, SVG liquid-glass button refractions, a simulated 4-step AI reasoning terminal, dynamic sub-page routing for all project and capability detail pages, and a self-correcting Cognitive Twin AI assistant.',
    problem:
      'Generic portfolio templates fail to communicate technical depth or leave a strong impression. Most developer portfolios are static, lack interactive AI features, and offer no detailed project breakdowns. Standing out to HR, senior engineers, and technical evaluators requires a premium, memorable experience.',
    solution:
      'Design every visual element from scratch using the browser\'s native APIs (Canvas, SVG filters, GSAP). Add a simulated AI reasoning engine that "thinks" visibly in 4 steps. Create individual sub-pages per project with architecture, workflow, and implementation details. Add a Cognitive Twin that answers HR interview questions using live resume data.',
    workflow: [
      {
        phase: 'Phase 1 · Design System',
        steps: [
          'Define typography system: EB Garamond (serif headings) + Inter (body) + GeistMono (code)',
          'Create CSS design tokens for spacing, colours, and border styles in index.css',
          'Establish component hierarchy: sections → cards → atoms → icons',
          'Set dark background #0a0a0a, text #dadada, accent amber #fbbf24 + blue #3b82f6',
          'Define responsive breakpoints and max-width containers in CSS',
        ],
      },
      {
        phase: 'Phase 2 · Canvas Animations',
        steps: [
          'Build digital rain canvas: random column speeds, Unicode character streams, click ripple rings',
          'Implement GSAP ScrollTrigger for section reveal animations on scroll',
          'Create SVG turbulence displacement filter for liquid-glass nav button refraction effect',
          'Add floating 3D sphere with CSS perspective transform and ambient rotation animation',
          'Implement mouse-tracking parallax on the hero section elements',
        ],
      },
      {
        phase: 'Phase 3 · Routing & Sub-pages',
        steps: [
          'Configure React Router DOM with routes for /, /capability/:slug, /project/:slug',
          'Create CapabilityDetail.tsx and ProjectDetail.tsx dynamic page components',
          'Add scroll restoration on route change: window.scrollTo(0, 0) in navigation handlers',
          'Populate each /project/:slug with full technical breakdown sourced from config.ts',
          'Add Prev/Next navigation links at bottom of each detail page',
        ],
      },
      {
        phase: 'Phase 4 · Cognitive AI Terminal',
        steps: [
          'Build CognitiveAssistant.tsx with 4-step visible reasoning simulation',
          'Step 1: Intent Mapping — parse query keywords against known topics',
          'Step 2: Vector Retrieval — locate matching resume data blocks',
          'Step 3: Fact Verification — cross-check against config.ts ground truth',
          'Step 4: Response Synthesis — compose natural language answer with typewriter effect',
        ],
      },
    ],
    implementation: [
      { step: 1, title: 'Project Bootstrap', desc: 'Scaffold React + TypeScript + Vite project with all core dependencies.', code: 'npm create vite@latest portfolio -- --template react-ts\nnpm install gsap react-router-dom lucide-react\nnpm install -D @types/gsap' },
      { step: 2, title: 'Canvas Digital Rain', desc: 'Create a full-screen canvas overlay with animated falling character streams and click ripple effects.', code: 'const canvas = useRef<HTMLCanvasElement>(null)\nuseEffect(() => {\n  const ctx = canvas.current!.getContext("2d")\n  // column-based rain drawing loop\n}, [])' },
      { step: 3, title: 'SVG Liquid-Glass Filter', desc: 'Apply turbulence + displacement SVG filter to navigation buttons for a liquid-glass refraction look.', code: '<svg style={{display:"none"}}>\n  <filter id="glass">\n    <feTurbulence baseFrequency="0.015" numOctaves="3"/>\n    <feDisplacementMap in="SourceGraphic" scale="8"/>\n  </filter>\n</svg>' },
      { step: 4, title: 'Config-Driven Content', desc: 'Store all text, project data, skills, and resume facts in config.ts — single source of truth for both UI and AI terminal.' },
      { step: 5, title: 'AI Reasoning Terminal', desc: '4-step typewriter simulation: intent → retrieval → verify → synthesize. Self-correcting logic detects factual mismatches.', code: 'const steps = ["Intent Mapping","Vector Retrieval","Fact Verification","Synthesis"]\nsteps.forEach((s, i) => setTimeout(() => showStep(s), i * 800))' },
      { step: 6, title: 'Build & Deploy', desc: 'Build production bundle with Vite, deploy to Vercel with a single command. All routes handled by Vercel SPA rewrite config.', code: 'npm run build\nnpx vercel deploy --prod' },
    ],
    tech: [
      { category: 'Frontend Framework', items: ['React 19', 'TypeScript 5', 'Vite 7', 'React Router DOM'] },
      { category: 'Animation', items: ['GSAP 3', 'Canvas API', 'SVG Filters', 'CSS Keyframes', 'CSS Perspective'] },
      { category: 'Design', items: ['EB Garamond', 'Inter', 'GeistMono', 'Lucide Icons', 'Vanilla CSS'] },
      { category: 'Deployment', items: ['Vercel', 'GitHub Actions', 'Node.js 20'] },
    ],
    results: [
      'Lighthouse Performance score 94+ with First Contentful Paint under 1.2s',
      'Custom Canvas rain animation runs at 60fps with zero layout jank',
      'AI terminal successfully answers all 6 pre-configured interview questions correctly',
      'Dynamic /project/:slug routing serves individual project breakdown pages',
      'Professional dark-mode design with zero external CSS framework dependency',
    ],
  },
  'ats-resume-analyser': {
    title: 'AI Resume Analyser & ATS Score Checker',
    tag: 'AI · NLP · Full Stack',
    year: '2026',
    accent: '#10b981',
    image: 'images/research-5.jpg',
    overview:
      'Developed an AI-powered applicant tracking system (ATS) that parses resumes (supporting PDF, DOCX, TXT), detects image-based scanned pages to run OCR pre-processing, match credentials against job posts using a multi-criteria NLP scoring engine, and rank candidates automatically.',
    problem:
      'Recruiters spend hours manually filtering through hundreds of resumes, leading to screening fatigue and subjective bias. Existing ATS software often relies on simple keyword matching that fails to identify semantic relevance, experience context, or degree eligibility.',
    solution:
      'Built a complete web application with a FastAPI gateway and React frontend. Resumes are parsed, and scanned pages are automatically preprocessed with OpenCV (thresholding, grayscaling) before Tesseract OCR. An NLP matching engine scores candidates across seven weighted criteria, including TF-IDF semantic similarity, experience duration, and certification checks.',
    workflow: [
      {
        phase: 'Phase 1 · Data Parsing & Extraction',
        steps: [
          'Support file uploads in PDF, DOCX, and TXT formats',
          'Utilize PyMuPDF (fitz) and pdfplumber to read text layout structures',
          'Automatically detect image-based scanned pages via text density check',
          'Send non-searchable pages to the computer vision preprocessing scanner',
        ],
      },
      {
        phase: 'Phase 2 · CV OCR Preprocessing',
        steps: [
          'Convert scanned PDF pages into OpenCV image matrices (numpy arrays)',
          'Apply adaptive Gaussian thresholding, grayscaling, and upscaling',
          'Execute Tesseract OCR engine to run character recognition on optimized images',
          'Merge extracted OCR segments with standard parsed text layers',
        ],
      },
      {
        phase: 'Phase 3 · NLP Matching Engine',
        steps: [
          'Precompile skill patterns using regex and spaCy en_core_web_sm',
          'Tokenize, remove NLTK stop words, and lemmatize text using WordNetLemmatizer',
          'Evaluate TF-IDF vector matrices to compute Cosine Semantic Similarity',
          'Run candidate credential scores across 7 weighted criteria',
        ],
      },
      {
        phase: 'Phase 4 · Dashboard UI',
        steps: [
          'Build recruiter portal displaying candidate scores, matches, and details',
          'Plot talent distribution curves and monthly application trends via Chart.js',
          'Configure JWT token-based routes, password bcrypt hashes, and security boundaries',
        ],
      },
    ],
    implementation: [
      { step: 1, title: 'Environment Setup', desc: 'Install fastapi, uvicorn, PyMuPDF, python-docx, pdfplumber, opencv-python, pytesseract, scikit-learn, nltk, sqlalchemy.', code: 'pip install fastapi uvicorn pymupdf python-docx pdfplumber opencv-python pytesseract scikit-learn nltk sqlalchemy' },
      { step: 2, title: 'Document Parsing & OCR Engine', desc: 'Build ocr_engine.py with OpenCV preprocessors to clean scanned pages and extract characters using Tesseract.', code: 'import cv2\nimport pytesseract\ndef preprocess_image(img):\n    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n    return cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]' },
      { step: 3, title: 'NLP TF-IDF Vectorizer', desc: 'Compute Cosine Similarity between resume text and job description using Scikit-Learn.', code: 'from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\nvectorizer = TfidfVectorizer()\ntfidf = vectorizer.fit_transform([resume_text, job_desc])\nsimilarity = cosine_similarity(tfidf[0:1], tfidf[1:2])[0][0]' },
      { step: 4, title: 'Weighted Multi-Criteria Scorer', desc: 'Construct score calculation engine weighting skill overlap, degree eligibility, certifications, and experience.' },
      { step: 5, title: 'FastAPI Router', desc: 'Define API routes in api/endpoints.py for resume upload, parsing, scoring, and ranking, proxying SQLite databases.' },
      { step: 6, title: 'React Analytical View', desc: 'Configure candidate tables, ranking sorts, and Chart.js distribution graphs.' },
    ],
    tech: [
      { category: 'Data & NLP', items: ['Python', 'scikit-learn', 'NLTK', 'spaCy', 'NumPy', 'TF-IDF'] },
      { category: 'OCR & Parsing', items: ['OpenCV', 'Tesseract OCR', 'PyMuPDF', 'python-docx', 'pdfplumber'] },
      { category: 'Backend & DB', items: ['FastAPI', 'Uvicorn', 'SQLite', 'SQLAlchemy', 'JWT', 'bcrypt'] },
      { category: 'Frontend', items: ['React', 'Axios', 'Chart.js', 'Tailwind CSS'] },
    ],
    results: [
      'Multi-format parser extracts text from PDF, DOCX, and TXT within 500ms',
      'OpenCV preprocessing yields 94% text accuracy on scanned, poor-quality documents',
      '7-stage scoring matching correctly prioritizes candidates based on actual skill/degree match',
      'Candidate rankings display dynamically with graphical analytical insights',
      'End-to-end token protection securing all recruiter endpoints and databases',
    ],
  },
};

const SLUG_ORDER = ['ai-crop-market-analyzer', 'cybershield-ai', 'brain-tumor-detection', 'ar-fashion-fitting', 'developer-portfolio', 'ats-resume-analyser'];

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{
        fontFamily: "'GeistMono', monospace", fontSize: 10,
        letterSpacing: '3px', textTransform: 'uppercase',
        color: 'rgba(218,218,218,0.3)', marginBottom: 16,
        paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>{label}</div>
      {children}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const data = slug ? PROJECTS[slug] : null;

  if (!data) {
    return (
      <div style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#dadada', fontFamily: "'Inter', sans-serif" }}>
          <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 48, marginBottom: 16 }}>Project Not Found</div>
          <button onClick={() => navigate('/')} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#dadada', padding: '10px 24px', borderRadius: 2, cursor: 'pointer', fontFamily: "'GeistMono', monospace", fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase' }}>← Back Home</button>
        </div>
      </div>
    );
  }

  const idx = SLUG_ORDER.indexOf(slug!);
  const prevSlug = idx > 0 ? SLUG_ORDER[idx - 1] : null;
  const nextSlug = idx < SLUG_ORDER.length - 1 ? SLUG_ORDER[idx + 1] : null;

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Background rain */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, opacity: 0.3 }}>
        <AmberCascades />
      </div>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: 72, padding: '0 5vw',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        backgroundColor: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}
          style={{ fontFamily: "'GeistMono', monospace", fontSize: 16, fontWeight: 400, letterSpacing: '-0.5px', color: '#fff', textDecoration: 'none' }}>
          {siteConfig.brandName}
        </a>
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}
          style={{ fontFamily: "'GeistMono', monospace", fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(218,218,218,0.4)', textDecoration: 'none' }}>
          ← Back to Portfolio
        </a>
      </nav>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>

        {/* ── HERO ─────────────────────── */}
        <section style={{ padding: '140px 5vw 80px', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{
              padding: '4px 14px', borderRadius: 2,
              fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase',
              background: `${data.accent}18`, border: `1px solid ${data.accent}40`,
              color: data.accent, fontFamily: "'GeistMono', monospace",
            }}>{data.tag}</span>
            <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 10, letterSpacing: '2px', color: 'rgba(218,218,218,0.3)' }}>{data.year}</span>
          </div>
          <h1 style={{
            fontFamily: "'EB Garamond', serif", fontWeight: 400,
            fontSize: 'clamp(42px,5vw,80px)', lineHeight: 1.05,
            letterSpacing: '-2px', color: '#fff', margin: '0 0 20px 0',
          }}>{data.title}</h1>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 300,
            fontSize: 18, lineHeight: 1.8, color: 'rgba(218,218,218,0.6)',
            margin: 0, maxWidth: 680,
          }}>{data.overview}</p>

          {data.githubUrl && (
            <div style={{ marginTop: 24 }}>
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 20px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 3,
                  color: '#fff',
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                }}
              >
                <span>View Repository on GitHub</span>
                <span style={{ fontSize: 13 }}>↗</span>
              </a>
            </div>
          )}

          {/* Tech chips */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
            {data.tech.flatMap(t => t.items).slice(0, 8).map(item => (
              <span key={item} style={{
                padding: '4px 12px', borderRadius: 2, fontSize: 10,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(218,218,218,0.45)', fontFamily: "'GeistMono', monospace",
              }}>{item}</span>
            ))}
          </div>
        </section>

        {/* top divider */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 5vw' }}>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
        </div>

        {/* ── MAIN BODY ─────────────────── */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 5vw' }}>

          {/* 2-col layout: body + sidebar */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 60, paddingTop: 60 }}>

            {/* LEFT COLUMN */}
            <div>
              {/* Problem */}
              <InfoBlock label="The Problem">
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.85, color: 'rgba(218,218,218,0.6)', margin: 0 }}>{data.problem}</p>
              </InfoBlock>

              {/* Solution */}
              <InfoBlock label="The Solution">
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.85, color: 'rgba(218,218,218,0.6)', margin: 0 }}>{data.solution}</p>
              </InfoBlock>

              {/* Workflow */}
              <InfoBlock label="Project Workflow">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  {data.workflow.map((phase, pi) => (
                    <div key={pi} style={{ padding: '24px 28px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 3, borderLeft: `2px solid ${data.accent}50` }}>
                      <div style={{ fontFamily: "'GeistMono', monospace", fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: data.accent, marginBottom: 16 }}>{phase.phase}</div>
                      <ol style={{ paddingLeft: 18, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {phase.steps.map((s, si) => (
                          <li key={si} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 13, lineHeight: 1.7, color: 'rgba(218,218,218,0.55)' }}>{s}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </InfoBlock>

              {/* Implementation Steps */}
              <InfoBlock label="Implementation Steps">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {data.implementation.map((step) => (
                    <div key={step.step} style={{ display: 'flex', gap: 20 }}>
                      {/* Number */}
                      <div style={{
                        flexShrink: 0, width: 36, height: 36, borderRadius: '50%',
                        background: `${data.accent}15`, border: `1px solid ${data.accent}40`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: "'GeistMono', monospace", fontSize: 12, color: data.accent,
                      }}>{step.step}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, color: '#fff', marginBottom: 6 }}>{step.title}</div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 13, lineHeight: 1.75, color: 'rgba(218,218,218,0.5)', margin: '0 0 10px 0' }}>{step.desc}</p>
                        {step.code && (
                          <pre style={{
                            fontFamily: "'GeistMono', monospace", fontSize: 11,
                            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: 3, padding: '12px 16px',
                            color: 'rgba(218,218,218,0.6)', overflow: 'auto',
                            whiteSpace: 'pre', lineHeight: 1.6,
                          }}>{step.code}</pre>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </InfoBlock>

              {/* Results */}
              <InfoBlock label="Results & Outcomes">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {data.results.map((r, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ color: data.accent, fontSize: 14, marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: 'rgba(218,218,218,0.6)' }}>{r}</span>
                    </div>
                  ))}
                </div>
              </InfoBlock>
            </div>

            {/* RIGHT SIDEBAR */}
            <div style={{ paddingTop: 0 }}>
              <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Project image */}
                <div style={{ borderRadius: 3, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', aspectRatio: '4/3' }}>
                  <img src={data.image} alt={data.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.8)' }} />
                </div>

                {/* Tech stack breakdown */}
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 3 }}>
                  <div style={{ fontFamily: "'GeistMono', monospace", fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(218,218,218,0.3)', marginBottom: 16 }}>Tech Stack</div>
                  {data.tech.map((cat) => (
                    <div key={cat.category} style={{ marginBottom: 14 }}>
                      <div style={{ fontFamily: "'GeistMono', monospace", fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(218,218,218,0.25)', marginBottom: 6 }}>{cat.category}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {cat.items.map(item => (
                          <span key={item} style={{ padding: '3px 9px', borderRadius: 2, fontSize: 10, letterSpacing: '1px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(218,218,218,0.5)' }}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick facts */}
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 3 }}>
                  <div style={{ fontFamily: "'GeistMono', monospace", fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(218,218,218,0.3)', marginBottom: 16 }}>Quick Facts</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div><div style={{ fontSize: 10, letterSpacing: '1px', color: 'rgba(218,218,218,0.25)', marginBottom: 3, textTransform: 'uppercase', fontFamily: "'GeistMono', monospace" }}>Category</div><div style={{ fontSize: 13, color: '#fff', fontWeight: 300 }}>{data.tag}</div></div>
                    <div><div style={{ fontSize: 10, letterSpacing: '1px', color: 'rgba(218,218,218,0.25)', marginBottom: 3, textTransform: 'uppercase', fontFamily: "'GeistMono', monospace" }}>Year</div><div style={{ fontSize: 13, color: '#fff', fontWeight: 300 }}>{data.year}</div></div>
                    <div><div style={{ fontSize: 10, letterSpacing: '1px', color: 'rgba(218,218,218,0.25)', marginBottom: 3, textTransform: 'uppercase', fontFamily: "'GeistMono', monospace" }}>Phases</div><div style={{ fontSize: 13, color: '#fff', fontWeight: 300 }}>{data.workflow.length} phases</div></div>
                    <div><div style={{ fontSize: 10, letterSpacing: '1px', color: 'rgba(218,218,218,0.25)', marginBottom: 3, textTransform: 'uppercase', fontFamily: "'GeistMono', monospace" }}>Steps</div><div style={{ fontSize: 13, color: '#fff', fontWeight: 300 }}>{data.implementation.length} implementation steps</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next nav */}
          <div style={{ paddingBottom: 100, marginTop: 60 }}>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 40 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {prevSlug ? (
                <a href={`/project/${prevSlug}`}
                  onClick={(e) => { e.preventDefault(); navigate(`/project/${prevSlug}`); window.scrollTo(0, 0); }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 4, textDecoration: 'none' }}>
                  <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(218,218,218,0.3)' }}>← Previous</span>
                  <span style={{ fontFamily: "'EB Garamond', serif", fontSize: 20, color: '#fff' }}>{PROJECTS[prevSlug].title}</span>
                </a>
              ) : <div />}
              {nextSlug ? (
                <a href={`/project/${nextSlug}`}
                  onClick={(e) => { e.preventDefault(); navigate(`/project/${nextSlug}`); window.scrollTo(0, 0); }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, textDecoration: 'none' }}>
                  <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(218,218,218,0.3)' }}>Next →</span>
                  <span style={{ fontFamily: "'EB Garamond', serif", fontSize: 20, color: '#fff' }}>{PROJECTS[nextSlug].title}</span>
                </a>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
