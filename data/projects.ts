export interface Project {
  name: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  highlights?: string[]
  image?: string
}

export const projects: Project[] = [
  {
    name: 'Credit Risk Prediction System',
    description: 'Built a credit risk scoring model that classifies borrowers into four risk tiers and assigns credit scores (300–900). Developed financial features like Loan-to-Income and Utilization Ratios, and used Optuna to tune the model for better accuracy (AUC-ROC).',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Optuna', 'Streamlit', 'Machine Learning'],
    github: 'https://github.com/PiyushPanwarFST/ml-project-credit-risk-modeling?tab=readme-ov-file',
    demo: 'https://apppanel-jh4uxzhsd6fbubt5nnddkt.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
    highlights: [
      'Classifies borrowers into 4 risk tiers with default probability prediction',
      'Engineered critical financial features (Loan-to-Income, Utilization Ratios)',
      'Bayesian hyperparameter optimization using Optuna to maximize AUC-ROC',
      'Real-time Streamlit dashboard for loan approval analytics',
    ],
  },
  {
    name: 'Health Insurance Premium Prediction',
    description: 'Built a prediction model achieving 98% accuracy by segmenting data into "Young" and "Rest" groups to handle demographic differences. Reduced extreme prediction errors (from 27% to 2%) by adding a "Genetic Risk" feature for the under-25 demographic.',
    technologies: ['Python', 'XGBoost', 'Linear Regression', 'Statistics', 'Feature Engineering', 'VIF Analysis'],
    github: 'https://github.com/PiyushPanwarFST/ml-project-premium-prediction',
    demo: 'https://ml-project-premium-prediction-zrylyxvkgrwhx26wbywchm.streamlit.app/',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    highlights: [
      'Achieved 98% accuracy with strategic data segmentation ("Young" vs "Rest")',
      'Reduced extreme prediction errors from 27% to 2%',
      'Created domain-informed "Genetical Risk" feature for under-25 demographic',
      'VIF analysis to eliminate multicollinearity and ensure model stability',
    ],
  },
]

