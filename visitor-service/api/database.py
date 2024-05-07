import sqlalchemy
from sqlalchemy.orm import sessionmaker


from api.models import visitors
from api.settings import config

db_url = config.db_conn
# db_url = 'mysql+pymysql://clouds:clouds@13.125.245.89/clouds'



engine = sqlalchemy.create_engine(db_url, echo=True)
SessionLocal = sessionmaker(autocommit=False,
                            autoflush=False, bind=engine)

def create_tables():
    visitors.Base.metadata.create_all(engine)

def get_db():
    with SessionLocal() as db:
        yield db