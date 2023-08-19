import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import MapChart from '../../components/Map';
import styles from './Country.module.css';

const Country = () => {
  const { id } = useParams();
  console.log(id);
  const region = useSelector((state) => state.countries.countriesbyregion[id]);
  const continentpopulation = region?.continentpopulation;

  const countries = region?.countries || [];

  return (
    <div className={styles.container}>
      <div className={styles.topsection}>
        <MapChart />
        <div className={styles.continent}>
          <p>{id}</p>
          <h4>{continentpopulation || ''}</h4>
        </div>
      </div>
      <div className={styles.continent}>
        <h1>country breakdown-2023</h1>

        <div className={styles.cardwrapper}>
          {countries?.map((country) => (
            <div className={styles.card} key={country.id}>
              <h3>{country.name}</h3>
              <div className={styles.arrow}>
                <p>{country.population}</p>
                <span>
                  <BsArrowRightCircleFill />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;
