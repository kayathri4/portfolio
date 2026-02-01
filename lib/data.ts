export const SITE_CONTENT = {
    hero: {
        name: "Kayathri",
        role: "Geospatial Data Scientist / Remote Sensing & ML Engineer",
        tagline: "Bridging the gap between Satellite Imagery and actionable insights.",
        description: "Specializing in SAR processing, agricultural analytics, and deep learning for Earth observation. Transforming petabytes of pixel data into meaningful patterns.",
        badges: ["Python", "PyTorch", "Sentinel-1/2", "GEE", "YOLOv8", "TensorFlow", "PostGIS"],
        socials: {
            github: "https://github.com/kayathri4",
            linkedin: "https://linkedin.com/in/kayathri-vig",
            email: "mailto:kayathri@gmail.com",
            scholar: "https://scholar.google.com"
        }
    },
    about: {
        summary: "I am a researcher and engineer focused on applying computer vision to environmental challenges. With a background in Remote Sensing, I build scalable pipelines to monitor aquaculture, agriculture, and water quality globally.",
        details: "My work integrates Synthetic Aperture Radar (SAR) with optical data to overcome cloud cover limitations. I have developed models for shrimp pond segmentation, flood mapping, and crop classification using state-of-the-art architectures."
    },
    projects: [
        {
            id: "smartaqua",
            title: "SmartAqua",
            subtitle: "Automated Shrimp Growth Estimation",
            description: "A computer vision system utilizing YOLOv8 for instance segmentation to estimate shrimp size and biomass in real-time from mobile images, helping farmers optimize feed.",
            tags: ["YOLOv8", "Computer Vision", "Mobile", "Python"],
            image: "",
            link: "/projects/smartaqua"
        },
        {
            id: "sar-crop",
            title: "SAR-based Crop Classification",
            subtitle: "All-weather Monitoring Pipeline",
            description: "Developed a multi-temporal Sentinel-1 pipeline to classify crop types in cloud-prone regions, achieving 92% accuracy using Random Forest and Deep Learning fusion.",
            tags: ["Sentinel-1", "GEE", "Random Forest", "Time-series"],
            image: "",
            link: "#"
        },
        {
            id: "flood-map",
            title: "Rapid Flood Mapping",
            subtitle: "Emergency Response Analytics",
            description: "Near real-time flood extent mapping using thresholding on SAR backscatter data, integrated into a dashboard for disaster response teams.",
            tags: ["Sentinel-1", "Disaster Mgmt", "Flask", "Leaflet"],
            image: "",
            link: "#"
        },
        {
            id: "water-qual",
            title: "Satellite Water Quality",
            subtitle: "Inland Water Monitoring",
            description: "Estimating Chlorophyll-a and TSS levels in inland water bodies using Sentinel-2 spectral indices and machine learning regression.",
            tags: ["Sentinel-2", "Limnology", "Scikit-learn"],
            image: "",
            link: "#"
        }
    ],
    skills: {
        "Remote Sensing & SAR": ["Sentinel-1/2", "SNAP", "Google Earth Engine", "InSAR", "Polarimetry", "Open Data Cube"],
        "Machine Learning": ["PyTorch", "TensorFlow", "Scikit-learn", "YOLO", "U-Net", "Transformers", "Computer Vision", "OCR", "Roboflow", "LabelImg"],
        "Geospatial Dev": ["Python", "R", "Flask", "Streamlit", "Postman", "Swagger", "PostGIS", "SQL", "ETL Pipelines"],
        "Cloud & Tools": ["AWS", "Docker", "Git", "Keycloak", "Agile", "Linux", "QGIS"]
    }
};
