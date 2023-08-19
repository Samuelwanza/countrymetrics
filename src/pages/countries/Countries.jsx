import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { fetchCountries } from '../../redux/feature/countries/countriesSlice';
// import MapChart from '../../components/Map';
import styles from './Countries.module.css';
import Loader from '../../components/Loader';
import MapChart from '../../components/Map';

const Countries = () => {
  const {
    worldpopulation, countriesbyregion, loading, fetched,
  } = useSelector(
    (state) => state.countries,
  );
  const dispatch = useDispatch();
  console.log(countriesbyregion);
  useEffect(() => {
    if (!fetched) dispatch(fetchCountries());
  }, [fetched]);

  return (
    <div className={styles.countriesContainer}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.map}>
            <MapChart />
            <div className={styles.world}>
              <h2> WORLD</h2>
              <p>{`${worldpopulation} people`}</p>
            </div>
          </div>
          <div className={styles.continent}>
            <h3>stats by region</h3>
            <div className={styles.cardwrapper}>
              {Object.keys(countriesbyregion).map((key, index) => {
                const region = countriesbyregion[key];
                const cardIndex = index + 1; // Adding 1 to make index 1-based

                let backgroundColorClass = '';
                if (cardIndex === 1 || cardIndex === 4 || cardIndex === 5) {
                  backgroundColorClass = styles.cardBackground1;
                } else {
                  backgroundColorClass = styles.cardBackground2;
                }
                return (
                  <Link
                    to={`/countries/${key}`}
                    key={key}
                    className={`${styles.card} ${backgroundColorClass}`}
                  >
                    <div className={backgroundColorClass}>
                      <MapChart className={styles.map} />
                      <p>{key}</p>
                      <h4>{region.continentpopulation}</h4>
                      <span className={styles.arrow}>
                        <BsArrowRightCircleFill />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countries;
