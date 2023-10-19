from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float

class user(Base):
    __tablename__ = "User_Data"
    id= Column(Integer, primary_key=True, index=True)
    name = Column(String)
    profile = Column(String)
    category = Column(String)
    description = Column(String)
    