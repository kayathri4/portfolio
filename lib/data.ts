export const SITE_CONTENT = {
    hero: {
        name: "Kayathri",
        role: "Geospatial Data Scientist / Remote Sensing & ML Engineer",
        tagline: "Bridging the gap between Satellite Imagery and actionable insights.",
        badges: ["Python", "PyTorch", "Sentinel-1/2", "GEE", "YOLOv8", "TensorFlow", "PostGIS"],
        socials: {
            github: "https://github.com/kayathri4",
            linkedin: "https://linkedin.com/in/kayathri-vig",
            email: "mailto:kayathri@gmail.com",
            scholar: "https://scholar.google.com"
        }
    },
    about: {
        summary: "I am a Geospatial Data Scientist specializing in AI-driven environmental intelligence solutions. Experience in managing and analyzing large-scale geospatial datasets, including SAR and optical satellite data, and in designing robust validation and performance evaluation frameworks.",
        details: "Experienced in architecting end-to-end data pipelines that integrate object detection, generative AI, and predictive modeling for real-world environmental monitoring using camera-based images. Strong background in model calibration, validation, and performance evaluation to ensure reliable and scalable deployment of data-driven solutions. Proficient in full-stack development, from backend APIs to frontend interfaces."
    },
    projects: [
        {
            id: "smartaqua",
            title: "Automated water quality monitoring system for shrimp farming",
            subtitle: "",
            description: "Shrimp Farm Water Quality Monitoring via Satellite data. An automated Python pipeline that monitors Chlorophyll-a and Turbidity in shrimp ponds using harmonized Sentinel-2 and Landsat data. The system utilizes preprocessed spectral signatures, which are processed through a Machine Learning model calibrated with ground-truth data. This provides farmers with precise, high-frequency insights to optimize pond health and minimize environmental risk.",
            tags: ["Sentinel-2", "Landsat", "Random Forest", "Python Spatial API( ODC-STAC, ACOLITE)"],
            image: "",
            link: "/projects/smartaqua"
        },
        {
            id: "sar-crop",
            title: "SAR-based rice field mapping, Nigata (Japan)",
            subtitle: "",
            description: "This project leverages Sentinel-1 SAR time-series stack and Object-Based Image Analysis (OBIA) to automate the detection of rice paddies in Niigata, Japan. By integrating Orfeo ToolBox (LSMS) for large-scale segmentation and a Random Forest classifier for phenological pattern recognition the rice fields were identified and validated against LU map (nigata) which is published by JAXA.",
            tags: ["Sentinel-1", "OBIA", "Random Forest", "QGIS", "SNAP", "Orfeo ToolBox"],
            image: "",
            link: "/projects/sar-rice"
        },
        {
            id: "river-gauge",
            title: "Automated river gauge plate reading using a hybrid object detection and genAI",
            subtitle: "",
            description: "Developed an automated river gauge plate reading system for the Limpopo River Basin using computer vision and generative AI to extract water levels from field images.The framework combines object detection, pose-based scale extraction, and multimodal LLM reasoning to extract river discharge reading.",
            tags: ["YOLOv8", "YOLOv8-Pose", "GPT-4o", "Gemini 2.0", "Python"],
            image: "",
            link: "/projects/river-gauge",
            paperUrl: "https://arxiv.org/abs/2512.23454"
        },
        {
            id: "rainfall & drought",
            title: "Performance Evaluation of ECMWF-Based Seasonal Rainfall and SPI Drought Forecasts in the Limpopo Basin",
            subtitle: "",
            description: "Evaluated the performance of ECMWF seasonal rainfall forecasts over the Limpopo River Basin using satellite and in-situ observations. Validated forecast skill by comparing ECMWF data with CHIRPS and ground station rainfall across climatology, temporal variability, elevation, and temperature gradients. Developed a monthly drought forecasting framework using the SPI index and quantified forecast uncertainty using comprehensive error metrics.",
            tags: ["ECMWF", "CHIRPS", "SPI", "Python", "Spatial Analysis"],
            image: "",
            link: "/projects/rainfall-drought",
            papers: [
                {
                    title: "Monthly Rainfall Forecasts",
                    url: "https://cgspace.cgiar.org/items/a7431840-ef88-4ee1-8556-922a88d0495c",
                    pdf: "https://cgspace.cgiar.org/bitstreams/52491020-8318-4d05-8ab7-d2024040a2c4/download"
                },
                {
                    title: "Experimental Drought Forecast",
                    url: "https://cgspace.cgiar.org/items/8a00ab81-85da-479d-81ff-fcfbc201762c",
                    pdf: "https://cgspace.cgiar.org/bitstreams/6dd6f289-64a0-4c35-8bcf-b793a43a4af7/download"
                }
            ]
        }
    ],
    skills: {
        "Remote Sensing & SAR": ["Sentinel-1/2", "SNAP", "Google Earth Engine", "Polarimetry", "Orfeo ToolBox", "QGIS", "ACOLITE", "GDAL", "Geopandas", "Shapely", "rasterio", "folium"],
        "Machine Learning": ["PyTorch", "TensorFlow", "Scikit-learn", "YOLO", "U-Net", "Transformers", "Computer Vision", "OCR", "Roboflow", "LabelImg"],
        "Geospatial Dev": ["Python (pandas,numpy,plotly,matplotlib,seaborn)", "R", "Flask", "Streamlit", "Postman", "Swagger", "PostGIS", "SQL", "ETL Pipelines"],
        "Cloud & Tools": ["AWS", "Docker", "Git", "Keycloak", "Agile", "Linux", "QGIS"]
    }

};
