"""Models for Cupcake app."""

from flask_sqlalchemy import SQLAlchemy

GENERIC_IMG = 'https://tinyurl.com/demo-cupcake'

db = SQLAlchemy()

def connect_db(app):
    """Connect to a database"""
    db.app = app
    db.init_app(app)

class Cupcake(db.Model):
    """Cupcake"""

    __tablename__ = "cupcake"

    id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )

    flavor = db.Column(
        db.Text,
        nullable=False
    )

    size = db.Column(
        db.Text,
        nullable=False
    )

    rating = db.Column(
        db.Float,
        nullable=False
    )

    image = db.Column(
        db.Text
    )

    def default_img(self):
        """Return image for pet"""
        return self.image or GENERIC_IMG
